
export type TeamType = 'teamA' | 'teamB' | 'unassigned';

export class User {
    _name: string;
    _team: TeamType;
    _lastUpdated: Date;

    constructor(name: string) {
        this._name = name;
        this._team = 'unassigned';
        this._lastUpdated = new Date();
    }

    getName(): string {
        return this._name;
    }
    
    setName(name: string) {
        this.update();
        this._name = name;
    }

    getTeam(): TeamType {
        this.update();
        return this._team;
    }
    
    setTeam(team: TeamType) {
        this.update();
        this._team = team;
    }

    getLastUpdated(): Date {
        return this._lastUpdated;
    } 

    update() {
        this._lastUpdated = new Date();
    }

}