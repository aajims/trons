<template>
  <div id="app">
    <router-view/>
    <ul class="nav navbar-nav navbar-right">
        <li><router-link to="/privacy" >.</router-link></li>
        <li><router-link to="/term" >..</router-link></li>
        <li><router-link to="/En/privacy" >.</router-link></li>
        <li><router-link to="/En/term" >..</router-link></li>
    </ul>
  </div>
</template>
