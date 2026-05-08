import { format, parse } from 'date-fns'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect, useMemo, useCallback, SetStateAction } from 'react'

interface Query {
  [key: string]: string
}

interface FilterFieldStr<T> {
  field: T
  type: 'string'
  isDate?: boolean
}
interface FilterFieldArr<T> {
  field: T
  type: 'array'
  isDate?: boolean
}

type MergedFilterField<T> = FilterFieldArr<T> | FilterFieldStr<T>

interface Props<T> {
  filterFields?: MergedFilterField<T>[]
}

export const useParamsFilter = <T extends string>({ filterFields = [] }: Props<T>) => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const params: Query = {}

  searchParams.forEach((value, key) => {
    params[key] = value
  })

  const [filters, setFilters] = useState(
    filterFields.reduce(
      (prev, f) => {
        if (f.type === 'array')
          return {
            ...prev,
            [f.field]: f.field in params ? params[f.field].split(',') : [],
          }
        return {
          ...prev,
          [f.field]: f.field in params ? params[f.field] : '',
        }
      },
      {} as {
        [Property in MergedFilterField<T>['field']]: string | string[]
      },
    ),
  )

  const queryParams = useMemo(() => {
    const query = {
      ...filters,
    }
    return Object.fromEntries(
      Object.entries(query)
        .filter(([, value]) => value !== undefined && value !== null && value !== '')
        .map(([key, val]) => {
          if (filterFields.find(v => v.field === key)?.isDate) {
            return [key, format(parse(val as string, 'dd.MM.yyyy', new Date()), 'yyyy-MM-dd')]
          }
          return [key, val]
        }),
    )
  }, [filters, filterFields])

  const isFiltered = useMemo(() => {
    return !!Object.values(filters).filter(
      v => (typeof v === 'string' || Array.isArray(v)) && v.length,
    ).length
  }, [filters])

  const collectQueries = useCallback(() => {
    const queries: Query = {}

    for (const f in filters) {
      if (filters[f]?.length) {
        queries[f] = filters[f].toString()
      }
    }

    const filtersAsQuery = Object.entries(queries).reduce((accum, [field, value], ind) => {
      if (ind !== 0) return `${accum}&${field}=${value}`
      return `${field}=${value}`
    }, '')

    router.replace(`${pathname}?${filtersAsQuery}`)
  }, [filters, pathname, router])

  const handleSetFilters = useCallback(
    (
      filters: SetStateAction<{ [Property in MergedFilterField<T>['field']]: string | string[] }>,
    ) => {
      setFilters(filters)
    },
    [],
  )

  useEffect(() => {
    collectQueries()
  }, [filters, collectQueries])

  return {
    queryParams,
    isFiltered,
    filters,
    setFilters: handleSetFilters,
  }
}
