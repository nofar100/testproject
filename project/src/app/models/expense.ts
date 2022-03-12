import { Guid } from 'guid-typescript';
export interface Expense{
    id: Guid;
    userId: number;
    storeName: string;
    amount: number;
    dayoftracking: number;
}