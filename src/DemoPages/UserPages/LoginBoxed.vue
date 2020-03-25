<template>
    <div>
        <div class="h-100vh bg-plum-plate bg-animation">
            <div class="d-flex h-100 justify-content-center align-items-center">
                <b-col md="8" class="mx-auto app-login-box">
                    <div class="logo mx-auto mb-3"/>

                    <div class="modal-dialog w-100 mx-auto">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="h5 modal-title text-center">
                                    <h4 class="mt-2">
                                        <div>Welcome back,</div>
                                        <span>Please sign in to your account below.</span>
                                    </h4>
                                </div>
                                <b-form-group id="exampleInputGroup1"
                                              label-for="exampleInput1"
                                              description="We'll never share your email with anyone else.">
                                    <b-form-input id="exampleInput1"
                                                  v-model="email"
                                                  type="email"
                                                  required
                                                  placeholder="Enter email...">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group id="exampleInputGroup2"
                                              label-for="exampleInput2">
                                    <b-form-input id="exampleInput2"
                                                  type="password"
                                                  v-model="password"
                                                  required
                                                  placeholder="Enter password...">
                                    </b-form-input>
                                </b-form-group>
                                <div class="divider"/>
                            </div>
                            <div class="modal-footer clearfix">
                                <div class="float-right">
                                    <b-button variant="primary" size="lg" @click="login">Login to Dashboard</b-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center text-white opacity-8 mt-3">
                        Copyright &copy; ArchitectUI 2019
                    </div>
                </b-col>
            </div>
        </div>
    </div>
</template>
<style>
    .h-100vh {
        height: 100vh !important;
    }
    .logo {
        height: 25px;
        width: 158px;
        background-image: url('/images/logo.svg');
        background-size: cover;
        background-position: center;
    }
</style>
<script>
    import {post} from '../../http/http';
    import router from '../../router/index';

    export default {
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            login() {
                if (this.email.length > 0 && this.password.length > 0) {
                    post('/auth', {email: this.email, password: this.password})
                        .then((response) => {
                            const data = response.data;
                            localStorage.setItem('access_token', data.token);
                            router.push('/');
                        })
                        .catch(() => {
                            alert('Неправильный email или пароль');
                            this.dataToInitial();
                        });
                }
            },
            dataToInitial() {
                this.email = '';
                this.password = '';
            },
        }
    }
</script>