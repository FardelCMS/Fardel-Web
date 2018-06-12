export const state = () => ({
  notifs: [],
})

export const mutations = {  
  addNotif(state, notif) {
    state.notifs.push(notif)
  },
  removeNotif(state, notif) {
    for (var i = state.notifs.length - 1; i >= 0; i--) {
      if (state.notifs[i].type == notif.type &&
          state.notifs[i].content == notif.content) {
        state.notifs.splice(i, 1)
      }
    }
  }
}