export interface Task {
    title: string;
    description: string;
    category: string;
    status: string;
    due_date?: string;
    init_hour?: string;
    final_hour?: string;
    enable?: boolean;
    favorite?: boolean;
    _id?: string;
    flag?: boolean;
}
