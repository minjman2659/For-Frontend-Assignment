export type content = {
  id?: number;
  company: string;
  title: string;
  thumbnail: string;
  createdAt: Date;
  updatedAt: Date;
};

export type query = {
  limit: string;
  page: string;
  keyword: string;
  sortBy: string;
};
