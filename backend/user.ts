
export type TeamType = 'teamA' | 'teamB' | 'unassigned';

export interface User {
    name: string;
    team: TeamType;
};