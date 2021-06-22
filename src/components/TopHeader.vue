<template>
  <div class="flex px-4 pt-4">
    <div>
      <n-avatar
        circle
        :size="95"
        src="https://media-exp1.licdn.com/dms/image/C5103AQGvozR-E6gU0g/profile-displayphoto-shrink_800_800/0/1585673202903?e=1629331200&v=beta&t=OtCI08Hnu-mJXqU8KdVnDezzSRrQhqN7Hss9ftC7fJY"
      />
    </div>
    <div class="flex flex-col self-center pl-5">
      <div class="flex">
        <h1
          class="
            text-black
            dark:text-white
            font-poppins font-semibold
            text-xl
            self-center
          "
        >
          Darshan Aswath
        </h1>
        <img
          class="ml-2"
          src="https://emojis.slackmojis.com/emojis/images/1547582922/5197/party_blob.gif?1547582922"
          width="30"
        />
      </div>
      <div class="pt-2">
        <a href="mailto:darshanaswath@gmail.com">
          <n-button class="w-full" size="medium">
            <h1 class="text-black dark:text-white font-poppins">Message</h1>
          </n-button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { NAvatar, NButton } from "naive-ui";
export default {
  components: {
    NAvatar,
    NButton,
  },
};
</script>