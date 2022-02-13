import { Box } from '@chakra-ui/react'

var currentDate = () => {
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0')
  var yyyy = today.getFullYear()
  var time = today.getHours() + ':' + today.getMinutes()
  return (
    'Rendered at ' +
    time +
    ' on ' +
    mm +
    '/' +
    dd +
    '/' +
    yyyy +
    ' (' +
    Intl.DateTimeFormat().resolvedOptions().timeZone +
    ')'
  )
}

const Footer = () => {
  return (
    <Box align="middle" opacity={0.5} fontSize="m">
      row 3️⃣ (6b) | {currentDate()}
    </Box>
  )
}

export default Footer
