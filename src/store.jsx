import { createStore } from "redux";

const initialState = {
  currentPage: "",
  onlineUsers: [
    {
      user: "mike",
      ip: "10.10.10.10",
      pid: "4421",
    },
    {
      user: "sara",
      ip: "10.10.10.10",
      pid: "1132",
    },
  ],
  allUsers: [
    {
      id: 0,
      username: "mike",
      password: "12345",
      email: "abcd123456@email.com",
      mobile: "09999999999",
      referal: "mr.john doe",
      multiuser: "3",
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
      onlinestate: "false",
      currentip: "10.10.10.10",
    },
    {
      id: 1,
      username: "ben",
      password: "12345",
      email: "pqweoi37@email.com",
      mobile: "99632165843",
      referal: "mr.john doe",
      multiuser: "1",
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
      onlinestate: "true",
      currentip: "10.10.10.10",
    },
    {
      id: 2,
      username: "sara",
      password: "12345",
      email: "asdaipoi7@email.com",
      mobile: "11299300332",
      referal: "mr.john doe",
      multiuser: "1",
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
      onlinestate: "true",
      currentip: "10.10.10.10",
    },
    {
      id: 3,
      username: "dan",
      password: "12345",
      email: "asdas2348@email.com",
      mobile: "00199633205",
      referal: "mr.john doe",
      multiuser: "3",
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
      onlinestate: "false",
      currentip: "10.10.10.10",
    },
    {
      id: 4,
      username: "brat",
      password: "12345",
      email: "ewrt43@email.com",
      mobile: "11299633249",
      referal: "mr.john doe",
      multiuser: "3",
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
      onlinestate: "true",
      currentip: "10.10.10.10",
    },
    {
      id: 5,
      username: "brittney",
      password: "12345",
      email: "asdret546@email.com",
      mobile: "11299300256",
      referal: "mr.john doe",
      multiuser: "3",
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
      onlinestate: "true",
      currentip: "10.10.10.10",
    },
    {
      id: 6,
      username: "peter",
      password: "12345",
      email: "tydaa234@email.com",
      mobile: "11245963215",
      referal: "mr.john doe",
      multiuser: "3",
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
      onlinestate: "false",
      currentip: "10.10.10.10",
    },
    {
      id: 7,
      username: "brayan",
      password: "12345",
      email: "asdasd12@email.com",
      mobile: "55214596328",
      referal: "mr.john doe",
      multiuser: "3",
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
      onlinestate: "true",
      currentip: "10.10.10.10",
    },
    {
      id: 8,
      username: "stowie",
      password: "12345",
      email: "dfhbnA876@email.com",
      mobile: "77266482384",
      referal: "mr.john doe",
      multiuser: "3",
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
      onlinestate: "true",
      currentip: "10.10.10.10",
    },
    {
      id: 9,
      username: "lola",
      password: "12345",
      email: "qpwi23894@email.com",
      mobile: "77362625264",
      referal: "mr.john doe",
      multiuser: "3",
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
      onlinestate: "false",
      currentip: "10.10.10.10",
    },
    {
      id: 10,
      username: "griffen",
      password: "12345",
      email: "sjkldfnskld@email.com",
      mobile: "99847564711",
      referal: "mr.john doe",
      multiuser: "3",
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
      onlinestate: "true",
      currentip: "10.10.10.10",
    },
    {
      id: 11,
      username: "hawk",
      password: "12345",
      email: "sjdhfda7645@email.com",
      mobile: "83766594098",
      referal: "mr.john doe",
      multiuser: "3",
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
      onlinestate: "true",
      currentip: "10.10.10.10",
    },
    {
      id: 12,
      username: "tom",
      password: "12345",
      email: "kjdfhzxm87@email.com",
      mobile: "73635244234",
      referal: "mr.john doe",
      multiuser: "3",
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
      onlinestate: "true",
      currentip: "10.10.10.10",
    },
    {
      id: 13,
      username: "eddie",
      password: "12345",
      email: "iouvjn78345@email.com",
      mobile: "77354673645",
      referal: "mr.john doe",
      multiuser: "3",
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
      onlinestate: "true",
      currentip: "10.10.10.10",
    },
    {
      id: 14,
      username: "susan",
      password: "12345",
      email: "pijnvg892374@email.com",
      mobile: "93837254756",
      referal: "mr.john doe",
      multiuser: "3",
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
      onlinestate: "false",
      currentip: "10.10.10.10",
    },
    {
      id: 15,
      username: "jim",
      password: "12345",
      email: "askjm2348@email.com",
      mobile: "93726547388",
      referal: "mr.john doe",
      multiuser: "3",
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
      onlinestate: "true",
      currentip: "10.10.10.10",
    },
    {
      id: 16,
      username: "jennifer",
      password: "12345",
      email: "oijxc182@email.com",
      mobile: "90238472442",
      referal: "mr.john doe",
      multiuser: "3",
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
      onlinestate: "true",
      currentip: "10.10.10.10",
    },
    {
      id: 17,
      username: "emy",
      password: "12345",
      email: "mnzxcx123@email.com",
      mobile: "27264960384",
      referal: "mr.john doe",
      multiuser: "3",
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
      onlinestate: "false",
      currentip: "10.10.10.10",
    },
    {
      id: 18,
      username: "tim",
      password: "12345",
      email: "928374jkash@email.com",
      mobile: "72691847362",
      referal: "mr.john doe",
      multiuser: "3",
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
      onlinestate: "true",
      currentip: "10.10.10.10",
    },
    {
      id: 19,
      username: "kate",
      password: "12345",
      email: "iouwqe7342@email.com",
      mobile: "82765194736",
      referal: "mr.john doe",
      multiuser: "3",
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
      onlinestate: "true",
      currentip: "10.10.10.10",
    },
  ],
  addUserModal:false,
};

const changeState = (state = initialState, { type, ...rest }) => {
  if (type === "set") {
    return { ...state, ...rest };
  } else if (type === "SET_PAGE") {
    return Object.assign({}, state, { currentPage: rest.currentPage });
  } else if (type === "SET_USERS") {
    return Object.assign({}, state, { currentPage: rest.users });
  } else if (type === "SET_ONLINE") {
    return Object.assign({}, state, { currentPage: rest.online });
  } else if (type === "SET_USERMODAL") {
    return Object.assign({}, state, { addUserModal: rest.modalstate });
  }else {
    return state;
  }
};

const store = createStore(changeState);
export default store;
