const ModuleNew = () => import("@/pages/Modules/ModuleNew");

export default [
    {
      path: '/modules/create',
      component: ModuleNew,
      name: 'new-module'
    },
]
