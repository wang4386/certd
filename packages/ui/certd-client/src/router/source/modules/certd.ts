export const certdResources = [
  {
    title: "证书自动化",
    name: "certd",
    path: "/certd",
    redirect: "/certd/pipeline",
    meta: {
      icon: "ion:key-outline",
      auth: true
    },
    children: [
      {
        title: "证书自动化流水线",
        name: "pipeline",
        path: "/certd/pipeline",
        component: "/certd/pipeline/index.vue",
        meta: {
          icon: "ion:analytics-sharp"
        }
      },
      {
        title: "编辑流水线",
        name: "pipelineEdit",
        path: "/certd/pipeline/detail",
        component: "/certd/pipeline/detail.vue",
        meta: {
          isMenu: false
        }
      },
      {
        title: "授权管理",
        name: "access",
        path: "/certd/access",
        component: "/certd/access/index.vue",
        meta: {
          icon: "ion:disc-outline"
        }
      },
      {
        title: "设置",
        name: "certdSettings",
        path: "/certd/settings",
        redirect: "/certd/settings/email",
        meta: {
          icon: "ion:settings-outline",
          auth: true
        },
        children: [
          {
            title: "邮箱设置",
            name: "email",
            path: "/certd/settings/email",
            component: "/certd/settings/email-setting.vue",
            meta: {
              icon: "ion:mail-outline",
              auth: true
            }
          }
        ]
      }
    ]
  }
];
