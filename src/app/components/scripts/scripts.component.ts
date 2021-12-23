import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scripts',
  templateUrl: './scripts.component.html',
  styleUrls: ['./scripts.component.css']
})
export class ScriptsComponent implements OnInit {

  dataSelect = [
    ['Informações Gerais'], 
    ['Métodos de Imagems'], 
    [['Ressonância Magnética'], ["input",'Senha', 'rms'], ["checkbox",'Alergia','RMA'], ["checkbox",'Fobia','RMF'], ["checkbox",'Metal','RMM'], ["checkbox",'Marca-passo','RMMP'], ["checkbox",'Ap. Ortod.','RMAO'], ["checkbox",'Cirurgia','RMC'], ["checkbox",'Gestante','RMG']], 
    ['RM de Mamas', ["input",'Senha','mas'], ["input",'Pac. Menst.','mam'], ["input",'CA Familiar','mamca'], ["checkbox",'Fobia','manfo'], ["checkbox",'Metal','manme'], ["checkbox",'Marca-passo','manmar'], ["checkbox",'Gestante','manges'], ["checkbox",'Cirurgia','mancir']], 
    ['Ressonância Cardíaca', ["input",'Telefone', 'carte'], ["input",'Senha','cars'], ["input",'E-mail','care']], 
    ['ArtroRM', ["input",'Senha','ars'], ["checkbox",'Fobia','arf'], ["checkbox",'Bronquite','arbr'], ["checkbox",'Asma','aras'], ["checkbox",'Diabetes','ardia'], ["checkbox",'Metal','arme'], ["checkbox",'Cirurgia','arcir']], 
    ['Tomografia Comput.', ["input",'Senha','tose'], ["checkbox",'Bronquite','tobro'], ["checkbox",'Asma','tpoas'], ["checkbox",'Diabete','todia'], ["checkbox",'Alergia','toale'], ["checkbox",'Prob. F(renal)','topro'], ["checkbox",'Cirurgia','tocir'], ["checkbox",'Gestante','toges']], 
    ['PET CT/Scan Oncológico', ["input",'Senha','pets'], ["input",'Quimiot.','petqui'], ["input",'Radiot.','petra'], ["input",'Diabetes','petdia'], ["checkbox",'Prob. F(renal)','petprob'], ["checkbox",'Asma','petas']], 
    ['AngioTC Coronariana', ["input",'Senha','angios'], ["checkbox",'Bronquite','angiobron'], ["checkbox",'Asma','angioas'], ["checkbox",'Diabete','angiodia'], ["checkbox",'Alergia','angioaler'], ['checkbox','Arritmia','angioarr'], ["checkbox",'Prob. F(renal)','angiopro']],
    ['Medicina Nuclear', ["input",'Senha','meds'], ["checkbox",'Gestante','medges']],
    ['SISREG', ["input",'Chave','sischa'], ["input",'Data/Unid.','sisda'], ["input",'CNS','siscns'], ["checkbox",'Alergia','sisale'], ["checkbox",'Fobia','sisfob'], ["checkbox",'Metal','sisme'], ["checkbox",'Marca-passo','sismar'], ["checkbox",'Ap. Ortod.','sisap'], ["checkbox",'Cirurgia','siscir'], ["checkbox",'Gestante','sisges']], 
    ['SER', ["input",'Chave Aut.','sercha'], ["input",'Data','serda'], ["input",'Unidade','serunid'], ["input",'CNS','sercns'], ["input",'Nº Solic.','sersol']], 
    ['Biopsia', ["input",'Senha','bios']],
    ['Teste Resp. Carb. 14 H. Pylory', ["input",'Senha','tests']], 
    ['Prova F(Pulmonar)', ["input",'Senha','provs']], 
    ['Marcação Pré-cirúrgica', ["input",'Telefone','martel'], ["input",'Data','marda'],["input", 'Convênio','marcon'], ["input",'Autorização','maraut']],
    ['Paciente Int.', ["input",'Senha','pacssss'], ["input",'Motivo','pacmsss'], ["input",'Setor Internado','pacsisss'], ["input",'Senha Internação','pacseisss'], ["input",'Hospital','pachossss'], ["input",'Tel. Hospital','pacteho'], ["input",'Lúcido, Orientado, Conciênte','pacloc'], ["input",'Lig. Equipamento(s)','pacle'], ["input",'Precausão de Contato','pacpc']]
  ]
  
  dataComplements: any = [];
  
  constructor() { }

  
  ngOnInit(): void {
    
  }
  
  copy() {
    let text = "";

    const allInputs = document.querySelectorAll("input") as NodeListOf<HTMLInputElement>;
    const allLabels = document.querySelectorAll("label") as NodeListOf<HTMLLabelElement>;
    const textArea = document.querySelector("#exams") as HTMLInputElement;
    let n:number = 0;

    for(let i = 0; i < allLabels.length; i++) {
      if(allLabels[i].innerHTML == "Exames") {
        text += `Exames: ${textArea.value} || `;
        n--;
      } else if(allInputs[n].type == "checkbox") {
        if(allInputs[n].checked) {
          text += `${allLabels[i].innerHTML}: Sim || `;
        } else {
          text += `${allLabels[i].innerHTML}: Não || `;
        }
      } else {
        text += `${allLabels[i].innerHTML}: ${allInputs[n].value} || `;
      }
      n++;
    }
    
    navigator.clipboard.writeText(text);
  }

  clear(e:any) {
    const allInputs = document.querySelectorAll("input") as NodeListOf<HTMLInputElement>;
    
    this.dataComplements = [];
    e.value = "Informações Gerais";

    for(let i = 0; i < allInputs.length; i++) {
      allInputs[i].value = "";
    }

    const textArea = document.querySelector("#exams") as HTMLInputElement;
    textArea.value = "";

  }

  generateInputs(e: any) {
    this.dataComplements = [];

    if(e.value != "Informações Gerais") {
      this.dataComplements.push(["input",'Indicação Clínica','ic'], ["input",'Convênio','conv'], ["input",'Peso','pes'], ["input",'Preparos','preps']);
    }

    for(let i = 0; i < this.dataSelect.length; i++) {
      if(this.dataSelect[i][0] == e.value && this.dataSelect[i][0] != 'Métodos de Imagems') {
        for(let j = 1; j < this.dataSelect[i].length; j++) {
          this.dataComplements.push(this.dataSelect[i][j])
        }
      }
    }
  }

  selectedInput(e: any) {
    const inputId = e.id;
    const labelByClass = document.querySelector('.'+inputId);
    
    if(e.value != '') {
      if(labelByClass != null) {
        //@ts-ignore
        labelByClass.style.color = '#3f51b5'
        //@ts-ignore
        labelByClass.style.fontSize = '0.8em'
        //@ts-ignore
        e.style.fontSize = '1.2em'
      }
    }
    if(e.value == '') {
      if(labelByClass != null) {
        //@ts-ignore
        labelByClass.style.color = 'black'
        //@ts-ignore
        labelByClass.style.fontSize = '1em'
      }
    }
  }

  changeToText(e: any) {
    if(e.type == "text") {
      e.type = "checkbox"
      e.style.width = "20px";
      e.checked = false;
    } else {
      e.type = "text"
      e.style.width = "70%";
    }
  }  

}

//#3f51b5;