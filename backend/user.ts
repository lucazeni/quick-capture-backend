
export type TeamType = 'teamA' | 'teamB' | 'unassigned';

export class User {
    _id: string;
    _name: string;
    _team: TeamType;
    _lastUpdated: any;

    constructor(id: string, name: string) {
        this._id = id;
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

    getId(): string {
        return this._id;
    }
    
    setId(id: string) {
        this.update();
        this._id = id;
    }

    getTeam(): TeamType {
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