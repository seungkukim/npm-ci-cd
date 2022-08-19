enum Role {
  President,
  VicePresident,
  Member,
  Unknown,
}

export default function getRole(nickname: string): Role {
  switch (nickname) {
    case "platypus":
      return Role.President;
    case "dora":
      return Role.VicePresident;
    case "jeuk":
      return Role.Member;
    case "jaewoo":
      return Role.Unknown;
    default:
      return Role.Unknown;
  }
}
