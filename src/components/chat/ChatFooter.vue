<template>
    <div class="chat-footer bg-light">
        <b-input-group>
            <b-form-textarea id="input_message"
                             class="input_message"
                             v-model="input"
                             :placeholder="$ml.get('Chat.textareaPlaceholder')"
                             :rows="3"
                             :max-rows="5">
            </b-form-textarea>
            <b-input-group-append>
                <b-btn
                        class="footer_sendBtn"
                        variant="outline-success"
                        v-on:click="sendMessage"
                >{{$ml.get('Chat.btnSend')}}
                </b-btn>
            </b-input-group-append>
        </b-input-group>
    </div>
</template>

<script>
    import io from '../socket';

    export default {
        data() {
            return {
                input: ''
            }
        },
        methods: {
            sendMessage() {
                io.emit('message', {
                    message: this.input,
                    type: 'channel',
                    name: new URL(window.location.href).pathname
                })
            }
        },
        mounted() {
            io.on('message', function (data) {
                console.log(data)
            })
        }
    }
</script>

<style scoped>
    .chat-footer {
        padding: 20px;
    }

    .input_message {
        resize: none;
    }

    .footer_sendBtn {
        min-width: 100px;
        font-size: 18px;
    }
</style>