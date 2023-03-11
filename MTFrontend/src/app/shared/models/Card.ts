export interface Card{
  id: string
  title: string,
  description: string,
  status: number,
  position: number,
  createdAt: Date,
  modifiedAt: Date,
  ownerId: string,
  asigneeId: string
}
