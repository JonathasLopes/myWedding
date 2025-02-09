export interface IResponseInvites {
    families: IFamilyResponse[]
}

export interface IFamilyResponse {
    FamilyId: number,
    NameSearched: string,
    Members: IMembersResponse[]
}

export interface IMembersResponse {
    Id: string,
    Name: string,
    Confirmed: boolean
}