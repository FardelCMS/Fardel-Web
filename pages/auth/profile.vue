<template>
<section class="section">
  <div class="container">
    <h1 class="title">Details</h1>
    <div class="box">
      <div class="columns">
        <div class="column">
          Email :‌ {{$auth.user.email}}
        </div>
        <div class="column">
          First Name :‌ {{$auth.user.first_name}}
        </div>
        <div class="column">
          Last Name :‌ {{$auth.user.last_name}}
        </div>
      </div>
    </div>
    <h1 class="title">Addresses</h1>
    <div class="box">
      <div class="column"><a v-on:click="newAddressModal()" class="button title is-5 is-primary">New Address</a></div>
      <table class="table">
        <thead>
          <tr>
            <td>Street Address</td>
            <td>Postal Code</td>
            <td>Phone Number</td>
            <td>City</td>
            <td>Country</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          <tr class="clickable" v-for="address in addresses" v-bind:data-addrid="address.id" v-on:click="selectAddress" v-bind:key="address.id">
            <td>{{address.street_address}}</td>
            <td>{{address.postal_code}}</td>
            <td>{{address.phone}}</td>
            <td>{{address.city}}</td>
            <td>{{address.country}}</td>
            <td><a class="button is-danger" v-bind:data-id="address.id" v-on:click="deleteAddress">حذف</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <h1 class="title">سفارشات</h1>
    <div class="box">
      <table class="table">
        <thead>
          <tr>
            <td>Total Price</td>
            <td>Created Time</td>
            <td>Status</td>
            <td>Details</td>
          </tr>
        </thead>
        <tbody>
          <tr class="clickable" v-for="order in orders" v-bind:data-addrid="order.id" v-on:click="selectAddress" v-bind:key="order.id">
            <td>{{address.street_address}}</td>
            <td>{{address.postal_code}}</td>
            <td>{{address.phone}}</td>
            <td>{{address.city}}</td>
            <td>{{address.country}}</td>
          </tr>
        </tbody>
      </table>      
    </div>
  </div>
  <div class="modal" v-bind:class="{'is-active': newAddressModalActive}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">New Address</p>
        <button class="delete" aria-label="close" v-on:click="closeNewAddressModal"></button>
      </header>
      <section class="modal-card-body">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Country</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input ref="country" class="input" type="text" placeholder="Country">
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
          </div>

          <div class="field-label is-normal">
            <label class="label">City</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input ref="city" class="input" type="text" placeholder="City">
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Phone Number</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input ref="phoneNumber" class="input" type="text" placeholder="Phone Number">
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Postal Code</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input ref="postalCode" class="input" type="text" placeholder="Postal Code">
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Street Address</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input ref="address" class="input" type="text" placeholder="Street Address">
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <a class="button is-success" v-on:click="submitNewAddress">Save</a>
      </footer>
    </div>
  </div>
</section>
</template>

<script>
import {getAddresses, addAddress, deleteAdddress} from "~/modules/address"

export default {
  middleware: "auth",
  head: {
    title: "Profile"
  },
  data() {
    return {
      newAddressModalActive: false,
      selectedPaymentMethod: null,
      selectedAddress: null,
      addresses: [],
      orders: [],
      isSubmittingOrder: false,
    }
  },
  async asyncData(context) {
    let address_data = await getAddresses(context)
    return {addresses: address_data['addresses']}
  },
  methods : {
    newAddressModal: function() {
      this.$data.newAddressModalActive = !this.$data.newAddressModalActive
    },
    closeNewAddressModal: function(event) {
      this.$data.newAddressModalActive = false
    },
    choosePaymentMethod: function(event) {
      this.$data.selectedPaymentMethod = event.target.dataset.method
    },
    submitNewAddress: function(event) {
      var address = {
        country: this.$refs.country.value,
        city: this.$refs.city.value,
        phoneNumber: this.$refs.phoneNumber.value,
        postalCode: this.$refs.postalCode.value,
        address: this.$refs.address.value,
      }

      addAddress(this.$root, address).then(resp => {
        console.log(resp)
        this.$data.addresses.push(resp.address)
        this.$data.newAddressModalActive = false
        this.showAddNotification({
          message: "New address has been added.",
          title: "Success !"
        })
      })
    },
    deleteAddress: function (event) {
      let id = event.target.dataset.id
      var length = event.target.className
      event.target.className = event.target.className + " is-loading"

      deleteAdddress(this.$root, id).then(resp => {
        getAddresses(this.$root).then(resp => {
          this.$data.addresses = resp.addresses
          event.target.className = event.target.className.slice(0, -11)
        })
      })
    },
    selectAddress: function(event) {
      var addrId = event.target.parentNode.dataset.addrid
      if (addrId === undefined) {
        addrId = event.target.dataset.addrid
      }

      if (addrId === this.$data.selectedAddress) {
        this.$data.selectedAddress = null
      } else if (addrId != undefined) {
        this.$data.selectedAddress = addrId
      }
    },
    submitOrder: function(event) {
      var addressId = this.$data.selectedAddress
      var cartToken = this.$store.state.cart.token
      var redirectURL = "/shop/verify_order/"
      submitOrder(this.$root, addressId, cartToken, redirectURL).then(resp => {
        
      })
    }
  },
  notifications: {
    showAddNotification: {
      type: "success"
    }
  }
}
</script>