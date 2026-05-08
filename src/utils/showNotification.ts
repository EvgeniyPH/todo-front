import { enqueueSnackbar } from 'notistack'

export const showNotification = (message: string, variant: 'error' | 'success'): void => {
  enqueueSnackbar(message, {
    variant: variant,
    autoHideDuration: 3000,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center',
    },
  })
}
