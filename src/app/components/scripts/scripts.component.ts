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
    [['Ressonância Magnética'], ["input",'Senha'], ["checkbox",'Alergia'], ["checkbox",'Fobia'], ["checkbox",'Metal'], ["checkbox",'Marca-passo'], ["checkbox",'Ap. Ortod.'], ["checkbox",'Cirurgia'], ["checkbox",'Gestante']], 
    ['RM de Mamas', ["input",'Senha'], ["input",'Pac. Menst.'], ["input",'CA Familiar'], ["checkbox",'Fobia'], ["checkbox",'Metal'], ["checkbox",'Marca-passo'], ["checkbox",'Gestante'], ["checkbox",'Cirurgia']], 
    ['Ressonância Cardíaca', ["input",'Telefone'], ["input",'Senha'], ["input",'E-mail']], 
    ['ArtroRM', ["input",'Senha'], ["checkbox",'Fobia'], ["checkbox",'Bronquite'], ["checkbox",'Asma'], ["checkbox",'Diabetes'], ["checkbox",'Metal'], ["checkbox",'Cirurgia']], 
    ['Tomografia Comput.', ["input",'Senha'], ["checkbox",'Bronquite'], ["checkbox",'Asma'], ["checkbox",'Diabete'], ["checkbox",'Alergia'], ["checkbox",'Prob. F(renal)'], ["checkbox",'Cirurgia'], ["checkbox",'Gestante']], 
    ['PET CT/Scan Oncológico', ["input",'Senha'], ["input",'Quimiot.'], ["input",'Radiot.'], ["input",'Diabetes'], ["checkbox",'Prob. F(renal)'], ["checkbox",'Asma']], 
    ['AngioTC Coronariana', ["input",'Senha'], ["checkbox",'Bronquite'], ["checkbox",'Asma'], ["checkbox",'Diabete'], ["checkbox",'Alergia'], 'Arritmia', ["checkbox",'Prob. F(renal)']],
    ['Medicina Nuclear', ["input",'Senha'], ["checkbox",'Gestante']],
    ['SISREG', ["input",'Chave'], ["input",'Data/Unid.'], ["input",'CNS'], ["checkbox",'Alergia'], ["checkbox",'Fobia'], ["checkbox",'Metal'], ["checkbox",'Marca-passo'], ["checkbox",'Clipe Aneurisma'], ["checkbox",'Ap. Ortod.'], ["checkbox",'Cirurgia'], ["checkbox",'Gestante']], 
    ['SER', ["input",'Chave Aut.'], ["input",'Data'], ["input",'Unidade'], ["input",'CNS'], ["input",'Nº Solic.']], 
    ['Biopsia', ["input",'Senha']],
    ['Teste Resp. Carb. 14 H. Pylory', ["input",'Senha']], 
    ['Prova F(Pulmonar)', ["input",'Senha']], 
    ['Marcação Pré-cirúrgica', ["input",'Telefone'], ["input",'Data'],["input", 'Convênio'], ["input",'Autorização']],
    ['Paciente Int.', ["input",'Senha'], ["input",'Motivo'], ["input",'Setor Internado'], ["input",'Senha Internação'], ["input",'Hospital'], ["input",'Tel. Hospital'], ["input",'Lúcido, Orientado, Conciênte'], ["input",'Lig. Equipamento(s)'], ["input",'Precausão de Contato']]
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
      this.dataComplements.push(["input",'Indicação Clínica'], ["input",'Convênio'], ["input",'Peso'], ["input",'Preparos']);
    }

    for(let i = 0; i < this.dataSelect.length; i++) {
      if(this.dataSelect[i][0] == e.value && this.dataSelect[i][0] != 'Métodos de Imagems') {
        for(let j = 1; j < this.dataSelect[i].length; j++) {
          this.dataComplements.push(this.dataSelect[i][j])
        }
      }
    }
  }


  

}

//#3f51b5;