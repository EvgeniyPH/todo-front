import { Box, Typography, Card, CardContent } from '@mui/material'
import LayersIcon from '@mui/icons-material/Layers'
import SignUpForm from '@/components/SignUp'

export default function SignUpPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        component={'main'}
        sx={{
          width: '100%',
          maxWidth: '27rem',
          padding: '3rem 1.5rem',
        }}
      >
        <Card
          component={'section'}
          variant='outlined'
          sx={{
            backgroundColor: '#121215',
            padding: '1rem',
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <Box
              component={'header'}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '2rem',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                }}
              >
                <LayersIcon
                  sx={{
                    fontSize: '1.875rem',
                    color: 'primary.main',
                  }}
                />
                <Typography
                  component='h1'
                  variant='h6'
                  sx={{
                    letterSpacing: '-0.05em',
                    fontWeight: 900,
                    fontSize: '1.5rem',
                    lineHeight: 1.2,
                  }}
                >
                  Todo Manager
                </Typography>
              </Box>
              <Typography
                component='p'
                variant='body1'
                sx={{
                  letterSpacing: '-0.025em',
                  color: 'text.secondary',
                }}
              >
                Developer Workspace Sign Up
              </Typography>
            </Box>
            <SignUpForm />
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}
