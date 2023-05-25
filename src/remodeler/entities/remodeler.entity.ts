import {Project} from "../../project/entities/project.entity";
export class Remodeler {
    public id: number;
    public name: string;
    public address: string;
    public specialties: string[];
    public projects: Project[];
}
