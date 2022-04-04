import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Perfil',
    url: '/profile',
    iconComponent: { name: 'cil-user' }
  },
  {
    title: true,
    name: 'Material de apoyo'
  },
  {
    name: 'Material Disponible',
    url: '/material',
    iconComponent: { name: 'cilBook' }
  },
  {
    name: 'Tutoriales',
    url: '/tutoriales',
    iconComponent: { name: 'cilEducation' }
  },
  {
    name: 'Blogs',
    url: '/blogs',
    iconComponent: { name: 'cilEducation' }
  }
];
