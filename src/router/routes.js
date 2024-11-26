const routes = [
  {
    path: "/",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      {
        path: "",
        name: "login",
        component: () => import("src/pages/LoginPage.vue"),
        meta: { title: "Login" },
      },
      {
        path: "recuperar-senha",
        name: "recuperarSenha",
        component: () => import("src/pages/RecuperarSenhaPage.vue"),
        meta: { title: "Recuperar Senha" },
      },
      {
        path: "/reset-password",
        name: "resetPassword",
        component: () => import("src/pages/ResetPasswordPage.vue"),
        meta: { title: "Redefinir Senha" },
      },
    ],
  },

  {
    path: "/main",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("src/pages/HomePage.vue"),
        meta: { title: "Página Inicial" },
      },
      {
        path: "editora",
        name: "editora",
        component: () => import("src/pages/EditoraPage.vue"),
        meta: { title: "Controle de Editoras" },
      },
      {
        path: "livros",
        name: "livros",
        component: () => import("src/pages/LivroPage.vue"),
        meta: { title: "Controle de Livros" },
      },
      {
        path: "locatario",
        name: "locatario",
        component: () => import("src/pages/LocatarioPage.vue"),
        meta: { title: "Controle Locatário" },
      },
      {
        path: "aluguel",
        name: "aluguel",
        component: () => import("src/pages/AluguelPage.vue"),
        meta: { title: "Controle de Aluguel" },
      },
      {
        path: "usuario",
        name: "usuario",
        component: () => import("src/pages/UsuarioPage.vue"),
        meta: { title: "Controle de Usuário" },
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
