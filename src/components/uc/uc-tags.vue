<template>
   <div class="uc-tags">
      <div class="exp">
         <b v-for="(exp, index) in uc.experience">
            <md-chip v-bind:class="getClassByPrefix('exp-',exp)" disabled>{{ fullName('experience',exp) }}</md-chip>
            <md-tooltip md-direction="left">{{getTooltipByPrefix('experience',exp)}}</md-tooltip>
         </b>
      </div>
      <div class="divider"></div>
      <!--<md-divider class="md-inset"></md-divider>-->
      <div class="mat-acc">
         <b v-if="uc.maturity" v-for="(mat, index) in uc.maturity">
            <div v-if="mat" v-bind:class="getClassByPrefix('mat-',mat)" class="image-tag-size" title="maturity"></div>
            <md-tooltip md-direction="left">{{getTooltipByPrefix('maturity',mat)}}</md-tooltip>
         </b>
         <b v-if="uc.access" v-for="(access, index) in uc.access">
            <div v-if="access" v-bind:class="getClassByPrefix('access-',access)" class="image-tag-size" title="access"></div>
            <md-tooltip md-direction="left">{{getTooltipByPrefix('access',access)}}</md-tooltip>
         </b>
      </div>


   </div>
</template>

<script>
   export default {
      name: 'uc-tags',
      props: {
         uc: {
            type: Object,
            default () { return {} }
         },
         categories: {
            type: Object
         }
      },
      methods: {
         getClassByPrefix (prefix, type) {
            var key = prefix + type
            var data = { [key]: true }
            return data
         },
         getTooltipByPrefix (prefix, type) {
            var tooltip = ''
            if (prefix && type) {
               tooltip = this.categories[prefix][type].tooltip
            }
            return tooltip
         },
         fullName (prefix, elem) {
            return this.categories[prefix][elem].name
         }
      }
   }
</script>

<style scoped>
.all {
   color: gray;
}
/* Experiences levels */
.md-chip.md-theme-default.exp-all {
   background-color: #CCFFCC;
   margin-bottom: 5px;
}
.md-chip.md-theme-default.exp-power {
   background-color: #ffffb3;
   margin-bottom: 5px;
}
.md-chip.md-theme-default.exp-experts {
   background-color: #f9cfa1;
   margin-bottom: 5px;
}
.md-chip.md-theme-default.exp-code {
   background-color: #ebc3c3;
   margin-bottom: 5px;
}
/* Maturity level */
.mat-beta {
   background-image: url('https://raw.githubusercontent.com/antonelepfl/usecases/dev/src/assets/images/Maturity_BETA_48x48.png');
   width: 48px;
   height: 48px;
   margin-bottom: 5px;
}
.mat-experimental {
   background-image: url('https://raw.githubusercontent.com/antonelepfl/usecases/dev/src/assets/images/Maturity_EXP_48x48.png');
   width: 48px;
   height: 48px;
}
/* Access level */
.access-hpc {
   background-image: url('https://raw.githubusercontent.com/antonelepfl/usecases/dev/src/assets/images/Access_HPC_48x48.png');
   width: 48px;
   height: 48px;
}
.access-byor {
   background-image: url('https://raw.githubusercontent.com/antonelepfl/usecases/dev/src/assets/images/Access_BYO_48x48.png');
   width: 48px;
   height: 48px;
}
.exp {
   width: 49%;
}
.mat-acc {
   width: 49%;
   display: flex;
   justify-content: center;
}
.divider {
   border-top-width: 0;
   border-left-width: 1px;
   border-left-style: solid;
   border-color: lightgray;
   width: 2%;
   min-height: 50px;
}
.image-tag-size {
   width: 48px;
   height: 48px;
   background-size: 100% 100%;
}
@media screen and (max-width: 1500px) {
   .tags {
      display: block;
   }
   .divider {
      display: none;
   }
   .md-chip {
      font-size: 12px;
   }
   .mat-acc, .exp {
      width: 100%;
   }
}
@media screen and (max-width: 500px) {
  .image-tag-size {
    width: 30px;
    height: 30px;
  }
  .md-chip {
    font-size: 8px;
    border-radius: 13px;
    padding: 10px 5px;
  }
  .mat-acc {
    flex-direction: column;
    align-items: center;
  }
}
</style>
