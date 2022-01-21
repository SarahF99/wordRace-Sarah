<template>
  <div class="about">
    <h3>Hi there, check out your results</h3>
    <h1>Leaderboard</h1>
    
    <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Score
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <br/><br/>
    <div className="">
							Designed and built with
							<span role="img" aria-label="Heart">
								
								❤️
							</span>
							by Sarah
							
						</div>
            <br/>
    <a href="https://github.com/SarahF99 " target="_blank"
      ><i class="pi pi-github" style="fontSize: 2rem"></i
    ></a>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        desserts: [
          {
            name: 'Current Player',
            calories: 3,
          },
          {
            name: 'Player 2',
            calories: 2,
          },
          {
            name: 'Eclair',
            calories: 1,
          },
          {
            name: 'Cupcake',
            calories: 0,
          },
          {
            name: 'Who Am I',
            calories: 0,
          },
          {
            name: 'Jelly bean',
            calories: 0,
          },
          {
            name: 'Lollipop',
            calories: 1e-28,
          },
          {
            name: 'Player 10',
            calories: 1e-28,
          },
          {
            name: 'Donut',
            calories: 1e-28,
          },
          {
            name: 'KitKat',
            calories: 1e-28,
          },
        ],
      }
    },
  }
</script>
