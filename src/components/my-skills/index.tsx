import { InfiniteScroll } from '../infinite-scroll'

import './styles.css'

const skillsArray = [
  {
    label: 'JavaScript',
    icon: '',
  },
  {
    label: 'HTML',
    icon: '',
  },
  {
    label: 'CSS',
    icon: '',
  },
  {
    label: 'Front-end',
    icon: '',
  },
  {
    label: 'Full stack',
    icon: '',
  },
  {
    label: 'ReactJS',
    icon: '',
  },
  {
    label: 'WebDev',
    icon: '',
  },
  {
    label: 'UX/UI',
    icon: '',
  },
  {
    label: 'Animations',
    icon: '',
  },
]

export function MySkills() {
  return (
    <section>
      <h3>Skills</h3>

      <InfiniteScroll data={skillsArray} />
    </section>
  )
}
