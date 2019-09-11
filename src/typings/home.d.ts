declare namespace IHome {
  // 菜单
  export interface MenuItem {
    icon: string;
    name: string;
    to: string;
    type: string;
    action: boolean;
    top: boolean;
  }
}
