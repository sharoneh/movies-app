import { StyledSection } from './styled'

const Item = ({ label, value }) => value && value !== 'N/A' ? (
  <li><b>{label}: </b>{value}</li>
) : null

const Section = ({ title, items }) => {
  let hasValue = false

  items.every(item => {
    if (item.value && item.value !== 'N/A') {
      hasValue = true
      return false
    } else return true
  })

  return hasValue ? (
    <StyledSection>
      <h3>{title}</h3>

      <ul>
        {items.map((item, index) => (
          <Item
            label={item.label}
            value={item.value}
            key={`section#${title}-item#${index}`}
          />
        ))}
      </ul>
    </StyledSection>
  ) : null
}

export default Section