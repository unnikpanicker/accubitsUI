export interface IDashboardRoute {
  key: string;
  name: string;
  params: {
    username: string;
  };
}

export interface IDashboardProps {
  route: IDashboardRoute;
}
