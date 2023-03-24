const employees = [
  {
    id: 1,
    parentId: "",
    name: "Лихачев А.Е.",
    positionName: "Генеральный директор",
    phone: "111111111",
    email: "director@rosatom.ru",
    team: "",
    location: "Москва",
    department: "ГК Росатом",
    description:
      "Генеральный директор ГК Росатом",
    imageUrl: "https://www.rosatom.ru/upload/medialibrary/c61/c6199c73d3637e747bd8b13364dca372.jpg"
  },
 {
    id: 2,
    parentId: "1",
    name: "Smith1",
    positionName: "COO1",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "ГК Росатом",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/men/20.jpg",
     tags: "Ceo,tag1, tag2",
     isLoggedUser: false,
     office: "CEO office",
    area: "Corporate",
    profileUrl: "http://example.com/employee/profile"
  },
{
    id: 3,
    parentId: "1",
    name: "Smith2",
    positionName: "COO2",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "12",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/men/20.jpg"
  },
    {
    id: 4,
    parentId: "1",
    name: "Smith3",
    positionName: "COO3",
    phone: "99887766",
    email: "employee@email.com",
    team: "",
    location: "LA Branch",
    department: "12",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://randomuser.me/api/portraits/men/20.jpg"
  },

];

export default employees;
