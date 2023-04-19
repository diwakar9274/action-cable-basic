import consumer from "channels/consumer"

// document.addEventListener('turbolinks:load', () => {
  const element = document.getElementById('room_id');
  const room_id = element.getAttribute('data-room-id');
  console.log(room_id)
  consumer.subscriptions.create({ channel: "RoomChannel", room_id: room_id }, {
    
    connected() {
      console.log('now room channel is connected to ' + room_id )
    },
  
    disconnected() {
      // Called when the subscription has been terminated by the server
    },
  
    received(data) {
      //ActionCable.server.broadcast('room_channel', { message: 'hello'})
      console.log(data)
    }
  });
// })


