/** 待办事项 */
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

/** AddItem 组件的 Props */
export interface AddItemProps {
  onAdd: (value: string) => void;
}

/** Item 组件的 Props */
export interface ItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}
