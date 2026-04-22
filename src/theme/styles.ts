export const textInputStyle = {
  width: '100%',
  outline: 'none',
  transition: 'all 150ms',
  '& .MuiInputBase-root': {
    backgroundColor: '#18181b',
    border: '1px solid #27272a',
    color: '#d4d4d8',
    fontSize: '0.75rem',
    '&:focus': {
      borderColor: '#a78bfa',
      boxShadow: '0 0 0 1px #a78bfa',
    },
    '&:hover fieldset': {
      borderColor: '#a78bfa',
    },
  },
}

export const labelInputStyle = {
  fontWeight: 700,
  textTransform: 'uppercase',
  color: '#a1a1aa',
  letterSpacing: '0.1em',
  display: 'block',
  marginBottom: '8px',
}
