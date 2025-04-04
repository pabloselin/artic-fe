type SortKeys =
  | 'id'
  | 'title'
  | 'aic_start_at'
  | 'aic_end_at'
  | 'status'
  | 'artwork_ids';
type TableColumn = {
  key: SortKeys;
  label: string;
};
