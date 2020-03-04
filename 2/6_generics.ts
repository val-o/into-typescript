export interface TableColumn<TItem extends object> {
  renderer?: (item: TItem) => string;
  field: keyof TItem;
  width: number;
}

export interface IDog {
  name: string;
  age: string;
}

export const columns: TableColumn<IDog>[] = [
  {
    field: 'age',
    renderer: (dog) => dog.age + ' years',
    width: 12,
  },
  {
    field: 'name',
    width: 12,
  },
]


