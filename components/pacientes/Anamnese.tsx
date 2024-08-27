import React, { useState } from 'react';
import { Button, Checkbox, Divider, FormControl, FormControlLabel, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { dependencia } from '@/constants';
import DateOfBirthAndAge from '../DateOfBirthAndAge'

const Anamnese = () => {
  const [isReforcoEscolarChecked, setIsReforcoEscolarChecked] = useState(false);
  const [isExtraCurricularChecked, setIsExtracurricularChecked] = useState(false);

  const handleExtraCurricularChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsExtracurricularChecked(event.target.checked);
  };

  const [sociabilidade, setChange] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setChange(event.target.value as string);
  };


  return (
    <>
      <h3 style={{
        color: '#444',
        marginBottom: 0,
        paddingBottom: 0
        }}
      >
        Preliminar
      </h3>

      <Divider sx={{mb: '1rem',}}/>

      <Grid container spacing={2}>
        <Grid xs={12}>
          &nbsp;<FormControlLabel
            control={<Checkbox checked={isExtraCurricularChecked} onChange={handleExtraCurricularChange} />}
            label="Possui diagnóstico clínico?"
          />
          {isExtraCurricularChecked && (
            <>
              <TextField
                id="diagnosticos"
                label="Diagnósticos"
                fullWidth
                multiline
                rows={3}
              />

              <TextField
                id="reacao"
                label="Qual foi a reação da família frente ao diagnóstico?"
                fullWidth
                multiline
                rows={3}
              />

              <Typography>
                Médicos Responsáveis:
              </Typography>

              <Grid xs={12} md={4}>
                <TextField id='MedicoNome' label="Nome do Médico" fullWidth required variant="outlined" />
              </Grid>

              <Grid xs={12} md={4}>
                <TextField id='MedicoEspecialidade' label="Especialidade do Médico" fullWidth variant="outlined" />
              </Grid>

              <Grid xs={12} md={4}>
                <TextField id='MedicoTelefone' label="Telefone do Médico" fullWidth variant="outlined" />
              </Grid>

              <Typography>
                Medicamentos:
              </Typography>

              <Grid xs={12} md={4}>
                <TextField id='Medicamento' label="Medicamento" fullWidth variant="outlined" />
              </Grid>

              <Grid xs={12} md={4}>
                <TextField id='MedicamentoHorarios' label="Horários" fullWidth variant="outlined" />
              </Grid>

            </>
          )}
        </Grid>
      </Grid>

      <h3 style={{
        color: '#444',
        marginBottom: 0,
        marginTop: '3rem',
        paddingBottom: 0
        }}
      >
        Antecedentes Pessoais
      </h3>

      <Divider sx={{mb: '1rem',}}/>

      <Grid container spacing={2}>

        <Grid xs={12} md={6}>
          <FormControlLabel control={<Checkbox />} label="Filho desejado?" /><br />
          <FormControlLabel control={<Checkbox />} label="A gravidez foi acidental?" /><br />
          <FormControlLabel control={<Checkbox />} label="Uso de drogas durante a gestação?" />
        </Grid>

        <Grid xs={12} md={6}>
          <FormControlLabel control={<Checkbox />} label="A mãe queria engravidar?" /><br />
          <FormControlLabel control={<Checkbox />} label="Perturbou a vida de um dos pais ou do casal?" />
          <FormControlLabel control={<Checkbox />} label="A mãe fez acompanhamento pré-natal?" />
        </Grid>


        <Grid xs={12} md={6}>
          <TextField id='IdadeMaeGestacao' label="Idade da mãe durante a gestação" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <TextField id='TempoRelacaoPai' label="Tempo de relação com o pai da criança" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12}>
          <TextField
            id="Gestacao"
            label="Como foi a Gestação?"
            fullWidth
            multiline
            placeholder="Cuidados pré-natais, doenças, sintomas, alimentação, transfusão, tombo, alimentação, etc."
            rows={3}
          />
        </Grid>



        <Grid xs={12}>
            O bebê ao nascer:
        </Grid>

        <Grid xs={12} md={6}>
          <FormControlLabel control={<Checkbox />} label="Necessitou de oxigênio?" /><br />
          <FormControlLabel control={<Checkbox />} label="Teve icterícia?" /><br />
        </Grid>

        <Grid xs={12} md={6}>
          <FormControlLabel control={<Checkbox />} label="Teve convulsão?" /><br />
          <FormControlLabel control={<Checkbox />} label="Ficou na incubadora?" />
        </Grid>

        <Grid xs={12} md={4}>
          <TextField id='Meses' label="Nasceu com quantos meses?" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={4}>
          <TextField id='Peso' label="Tamanho ao nascer?" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={4}>
          <TextField id='Tamanho' label="Peso ao nascer?" fullWidth variant="outlined" />
        </Grid>

      </Grid>
















      <h3 style={{
        color: '#444',
        marginBottom: 0,
        marginTop: '3rem',
        paddingBottom: 0
        }}
      >
        Desenvolvimento
      </h3>

      <Divider sx={{mb: '1rem',}}/>

      <Grid container spacing={2}>
        <Grid xs={12}>
          &nbsp;<FormControlLabel
            control={<Checkbox checked={isExtraCurricularChecked} onChange={handleExtraCurricularChange} />}
            label="O paciente já sofreu algum acidente?"
          /><br />
          {isExtraCurricularChecked && (
            <TextField id="acidente"
              label="O paciente já sofreu algum acidente?"
              fullWidth multiline rows={3}
            />
          )}

          &nbsp;<FormControlLabel
            control={<Checkbox checked={isExtraCurricularChecked} onChange={handleExtraCurricularChange} />}
            label="O paciente já se submeteu a alguma cirurgia?"
          /><br />
          {isExtraCurricularChecked && (
            <TextField id="acidente"
              label="O paciente já se submeteu a alguma cirurgia?"
              fullWidth multiline rows={3}
            />
          )}

          &nbsp;<FormControlLabel
            control={<Checkbox checked={isExtraCurricularChecked} onChange={handleExtraCurricularChange} />}
            label="O paciente apresenta reações alérgicas?"
          /><br />
          {isExtraCurricularChecked && (
            <TextField id="acidente"
              label="Quais reações alérgicas o paciente apresenta?"
              fullWidth multiline rows={3}
            />
          )}

          &nbsp;<FormControlLabel
            control={<Checkbox checked={isExtraCurricularChecked} onChange={handleExtraCurricularChange} />}
            label="O paciente apresenta algum problema de visão?"
          /><br />
          {isExtraCurricularChecked && (
            <TextField id="acidente"
              label="Quais os problemas de visão do paciente?"
              fullWidth multiline rows={3}
            />
          )}

          &nbsp;<FormControlLabel
            control={<Checkbox checked={isExtraCurricularChecked} onChange={handleExtraCurricularChange} />}
            label="O paciente apresenta algum problema de audição?"
          /><br />
          {isExtraCurricularChecked && (
            <TextField id="acidente"
              label="Quais os problemas de audição do paciente?"
              fullWidth multiline rows={3}
            />
          )}

          &nbsp;<FormControlLabel
            control={<Checkbox checked={isExtraCurricularChecked} onChange={handleExtraCurricularChange} />}
            label="O paciente tem dores de cabeça frequentemente?"
          /><br />
          {isExtraCurricularChecked && (
            <TextField id="dor-de-cabeca"
              label="O paceinte tem dores de cabeça frequentemente?"
              placeholder="Quais a frequencia e as queixas do paciente? Dor de cabeça frontal, lateral, aguda, pulsante, etc."
              fullWidth multiline rows={3}
            />
          )}

          &nbsp;<FormControlLabel
            control={<Checkbox checked={isExtraCurricularChecked} onChange={handleExtraCurricularChange} />}
            label="O paciente já desmaiou alguma vez?"
          /><br />
          {isExtraCurricularChecked && (
            <TextField id="desmaios"
              label="O paceinte já desmaiou alguma vez?"
              placeholder="Quando? Como foi? É frequente?"
              fullWidth multiline rows={3}
            />
          )}

          &nbsp;<FormControlLabel
            control={<Checkbox checked={isExtraCurricularChecked} onChange={handleExtraCurricularChange} />}
            label="O paciente tem ou já teve convulsões?"
          /><br />
          {isExtraCurricularChecked && (
            <TextField id="convulsoes"
              label="O paceinte tem ou já teve convulsões?"
              placeholder="Quando? Como foi? É frequente?"
              fullWidth multiline rows={3}
            />
          )}

          &nbsp;<FormControlLabel
            control={<Checkbox checked={isExtraCurricularChecked} onChange={handleExtraCurricularChange} />}
            label="Há alguém na família que apresenta problemas de desmaios, convulsões, ataques, etc?"
          /><br />
          {isExtraCurricularChecked && (
            <TextField id="convulsoes"
              label="Há alguém na família que apresenta problemas de desmaios, convulsões, ataques, etc?"
              placeholder="Há alguém na família que apresenta problemas de desmaios, convulsões, ataques, etc?"
              fullWidth multiline rows={3}
            />
          )}

          &nbsp;<FormControlLabel
            control={<Checkbox checked={isExtraCurricularChecked} onChange={handleExtraCurricularChange} />}
            label="O paciente apresenta algum outro problema de saúde?"
          /><br />
          {isExtraCurricularChecked && (
            <TextField id="outros-problemas-de-saude"
              label="O paciente apresenta algum outro problema de saúde?"
              placeholder="O paciente apresenta algum outro problema de saúde?"
              fullWidth multiline rows={3}
            />
          )}

        </Grid>
      </Grid>
















      <h3 style={{
        color: '#444',
        marginBottom: 0,
        marginTop: '3rem',
        paddingBottom: 0
        }}
      >
        Alimentação
      </h3>

      <Divider sx={{mb: '2rem',}}/>

      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel id="alimentacao">Como é a alimentação do paciente?</InputLabel>
            <Select
              id="alimentacao"
              value={sociabilidade}
              label="Como é a alimentação do paciente?"
              onChange={handleChange}
            >
              {dependencia.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel id="talher">O paciente usa talher?</InputLabel>
            <Select
              id="talher"
              value={sociabilidade}
              label="O paciente usa talher?"
              onChange={handleChange}
            >
              <MenuItem value="nao">
                Não
              </MenuItem>
              <MenuItem value="colher">
                Colher
              </MenuItem>
              <MenuItem value="garfo">
                Garfo
              </MenuItem>
              <MenuItem value="faca">
                Garfo e Faca
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel id="alimentacao">Tipo de alimentação</InputLabel>
            <Select
              id="alimentacao"
              value={sociabilidade}
              label="Tipo de alimentação"
              onChange={handleChange}
            >
              <MenuItem value="liquida">
                Líquida
              </MenuItem>
              <MenuItem value="pastosa">
                Pastosa
              </MenuItem>
              <MenuItem value="solida">
                Sólida
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={12}>
          <TextField
            id="mamadeira"
            label="Como foi a passagem do PEITO para a MAMADEIRA?"
            fullWidth multiline rows={3}
          />
        </Grid>

        <Grid xs={12}>
          <TextField
            id="papinha"
            label="Como foi a passagem da MAMADEIRA para PAPINHA?"
            fullWidth multiline rows={3}
          />
        </Grid>

        <Grid xs={12}>
          <TextField
            id="alimentacao"
            label="Como é a alimentação do paciente em geral?"
            fullWidth multiline rows={3}
          />
        </Grid>

        <Grid xs={12}>
          <FormControlLabel control={<Checkbox />} label="O paciente é forçado a se alimentar?" /><br />
          <FormControlLabel control={<Checkbox />} label="O paciente apresenta seletividade alimentar?" /><br />
          <FormControlLabel control={<Checkbox />} label="O paciente apresenta resistência a algum alimento?" /><br />
          <FormControlLabel control={<Checkbox />} label="O paciente recebe ajuda na hora de comer?" /><br />
          <FormControlLabel control={<Checkbox />} label="O paciente come sem derrubar a comida?" /><br />
          <FormControlLabel control={<Checkbox />} label="O paciente tem hora certa para comer?" /><br />
          <FormControlLabel control={<Checkbox />} label="A família come junto à mesa?" /><br />
          <FormControlLabel control={<Checkbox />} label="O paciente come assistindo TV?" /><br />
          <FormControlLabel control={<Checkbox />} label="O paciente mastiga bem?" /><br />
          <FormControlLabel control={<Checkbox />} label="O paciente come depressa?" /><br />
          <FormControlLabel control={<Checkbox />} label="O paciente apresenta refluxo?" /><br />
          <FormControlLabel control={<Checkbox />} label="Apresenta sialorréia (produção excessiva de saliva ou dificuldade de deglutir a saliva)" /><br />
          <FormControlLabel control={<Checkbox />} label="O paciente apresenta ou já apresentou pneumonias de repetição?" /><br />
        </Grid>
      </Grid>
















      <h3 style={{
        color: '#444',
        marginBottom: 0,
        marginTop: '3rem',
        paddingBottom: 0
        }}
      >
        Eliminação e Higiene
      </h3>

      <Divider sx={{mb: '2rem',}}/>

      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <TextField id='fralda' label="Com que idade deixou de usar fraldas?" fullWidth type="number" variant="outlined" />
        </Grid>

        <Grid xs={12}>
          <TextField
            id="desfraldamento"
            label="Como foi essa passagem ao longo do processo de desfraldamento?"
            placeholder="Segurava? Molhava a roupa? Brincava e saia correndo? Era repreendido? Chorava?"
            fullWidth multiline rows={3}
          />
        </Grid>

        <Grid xs={12}>
          <TextField
            id="sem-fralda"
            label="E hoje como está?"
            placeholder="E hoje como está? O processo foi superado? Alguma intercorrência?"
            fullWidth multiline rows={3}
          />
        </Grid>

        <Grid xs={12}>
          <FormControl fullWidth>
            <InputLabel id="higiene">Como é a higiene após as necessidades fisiológicas?</InputLabel>
            <Select
              id="higiene"
              value={sociabilidade}
              label="Como é a higiene após as necessidades fisiológicas?"
              onChange={handleChange}
            >
              {dependencia.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={12} md={6}>
          <FormControlLabel control={<Checkbox />} label="O paciente apresenta enurese diurna?" />
          <FormControlLabel control={<Checkbox />} label="O paciente apresenta enurese noturna?" /><br />
        </Grid>
        <Grid xs={12} md={6}>
          <FormControlLabel control={<Checkbox />} label="O paciente apresenta encoprese diurna?" /><br />
          <FormControlLabel control={<Checkbox />} label="O paciente apresenta encoprese noturna?" /><br />
        </Grid>
      </Grid>

      <Divider sx={{my: '1rem'}}/>

      <Grid container spacing={2}>
        <Grid xs={12}>
          <FormControlLabel control={<Checkbox />} label="O paciente gosta de tomar banho?" /><br />
        </Grid>

        <Grid xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel id="banho">Como o paciente toma banho?</InputLabel>
            <Select
              id="banho"
              value={sociabilidade}
              label="Como o paciente toma banho?"
              onChange={handleChange}
            >
              {dependencia.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel id="pente">Como o paciente penteia os cabelos?</InputLabel>
            <Select
              id="pente"
              value={sociabilidade}
              label="Como o paciente penteia os cabelos?"
              onChange={handleChange}
            >
              {dependencia.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel id="higiene">Como é a higiene oral do paciente?</InputLabel>
            <Select
              id="higiene-oral"
              value={sociabilidade}
              label="Como é a higiene oral do paciente?"
              onChange={handleChange}
            >
              {dependencia.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={12}>
          <TextField
            id="observacoes-higiene"
            label="Observações"
            fullWidth multiline rows={3}
          />
        </Grid>
      </Grid>
















      <h3 style={{
        color: '#444',
        marginBottom: 0,
        marginTop: '3rem',
        paddingBottom: 0
        }}
      >
        Sono
      </h3>

      <Divider sx={{mb: '1rem',}}/>

      <Grid container spacing={2}>

        <Grid xs={12} md={6}>
          <FormControlLabel control={<Checkbox />} label="O paciente dorme bem?" /><br />
          <FormControlLabel control={<Checkbox />} label="O sono é tranquilo?" /><br />
          <FormControlLabel control={<Checkbox />} label="O sono é agitado?" /><br />
          <FormControlLabel control={<Checkbox />} label="Range os dentes?" /><br />
        </Grid>
        <Grid xs={12} md={6}>
          <FormControlLabel control={<Checkbox />} label="O paciente fala dormindo?" /><br />
          <FormControlLabel control={<Checkbox />} label="Apresenta sonambulismo?" /><br />
          <FormControlLabel control={<Checkbox />} label="Dorme em quarto separado dos pais?" /><br />
          <FormControlLabel control={<Checkbox />} label="Acorda e vai para a cama dos pais?" /><br />
        </Grid>
      </Grid>
















      <h3 style={{
        color: '#444',
        marginBottom: 0,
        marginTop: '3rem',
        paddingBottom: 0
        }}
      >
        Linguagem
      </h3>
      <Divider sx={{mb: '1rem',}}/>

      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <TextField
            id="balbuciar"
            label="Quando começou a balbuciar / emitir sons?"
          />
        </Grid>
        <Grid xs={12} md={4}>
          <TextField
            id="falar"
            label="Com que idade começou a falar?"
          />
        </Grid>
        <Grid xs={12} md={4}>
          <TextField
            id="primeiras-palavras"
            label="Quais foram as primeiras palavras?"
          />
        </Grid>
        <Grid xs={12} md={4}>
          <TextField
            id="primeiras-palavras"
            label="Quando usou as primeiras palavras com significado?"
          />
        </Grid>
        <Grid xs={12} md={4}>
          <TextField
            id=""
            label="Com quem falava mais?"
          />
        </Grid>

        <Grid xs={12}>
          <FormControlLabel control={<Checkbox />} label="Falavam para ele repetir?" /><br />
          <FormControlLabel control={<Checkbox />} label="O paciente falava muito errado?" /><br />    

          <FormControlLabel
            control={<Checkbox checked={isExtraCurricularChecked} onChange={handleExtraCurricularChange} />}
            label="Trocava letras ao falar?"
          /><br />
          {isExtraCurricularChecked && (
            <TextField id="trocar-letras"
              label="Quais letras o paciente trocava ao falar?"
              placeholder="Quais letras o paciente trocava ao falar?"
              fullWidth
            />
          )}
        </Grid>

        <Grid xs={12}>
          <FormControlLabel control={<Checkbox />} label="E hoje, ainda troca letras ao falar?" /><br />
          <FormControlLabel control={<Checkbox />} label="O paciente fala muito?" /><br />
          <FormControlLabel control={<Checkbox />} label="Ou fala pouco?" /><br />
          <FormControlLabel control={<Checkbox />} label="É ansioso ao falar?" /><br />    
          <FormControlLabel control={<Checkbox />} label="Fala muito rápido?" /><br />
          <FormControlLabel control={<Checkbox />} label="Ou fala muito devagar?" /><br />    
          <FormControlLabel control={<Checkbox />} label="Fala de uma forma que todos entedem?" /><br />    
          <FormControlLabel control={<Checkbox />} label="Gagueja?" /><br />    
          <FormControlLabel control={<Checkbox />} label="Consegue dar um recado?" /><br />    
          <FormControlLabel control={<Checkbox />} label="Faz um compra sozinho?" /><br />    
          <FormControlLabel control={<Checkbox />} label="Conta história, um caso ou uma novela?" /><br />    
          <FormControlLabel control={<Checkbox />} label="Você entende o que ele conta?" /><br />    
          <FormControlLabel control={<Checkbox />} label="Tem começo, meio e fim?" /><br />
          <FormControlLabel control={<Checkbox />} label="Relata fatos vivenciados?" /><br />
          <FormControlLabel control={<Checkbox />} label="Repete palavras ou frases que ouviu recentemente? (Ecolalia)" /><br />    
          <FormControlLabel control={<Checkbox />} label="Repete frases ou perguntas sem prestar a atenção nas repostas? (Perseveração)" /><br />
          <FormControlLabel control={<Checkbox />} label="Apresenta comunicação social? (Interage com o intuito de brincar / de se comunicar)" /><br />
          <FormControlLabel control={<Checkbox />} label="Apresenta troca de turnos? (Aguarda sua vez em uma conversação)" /><br />
          <FormControlLabel control={<Checkbox />} label="Apresenta focos específicos de interesse em uma conversação?" /><br />
          <FormControlLabel control={<Checkbox />} label="Consegue mudar de assunto com facilidade?" /><br />



          <FormControlLabel
            control={<Checkbox checked={isExtraCurricularChecked} onChange={handleExtraCurricularChange} />}
            label="E hoje ainda troca letras ao falar?"
          /><br />
          {isExtraCurricularChecked && (
            <TextField id="trocar-letras"
              label="Quais letras o paciente trocava ao falar?"
              placeholder="Quais letras o paciente trocava ao falar?"
              fullWidth
            />
          )}
        </Grid>


      </Grid>















      <h3 style={{
        color: '#444',
        marginBottom: 0,
        marginTop: '3rem',
        paddingBottom: 0
        }}
      >
        Escolaridade
      </h3>

      <Divider sx={{mb: '1rem',}}/>

      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <FormControlLabel control={<Checkbox />} label="Frequenta ou já frequentou creche?" /><br />    
        </Grid>

        <Grid xs={12}>
          <TextField
            id="sala-de-aula"
            label="Quando entrou na sala de aula pela primeira vez? Como foi a experiência para o paciente? E para a família?"
            fullWidth multiline rows={3}
          />
        </Grid>

        <Grid xs={12}>
          <TextField
            id="escola"
            label="Quem escolheu a escola e por quê?"
            fullWidth multiline rows={3}
          />
        </Grid>

        <Grid xs={12}>
          <FormControlLabel control={<Checkbox />} label="O paciente gosta de ir à escola?" /><br />    
          <FormControlLabel control={<Checkbox />} label="É bem aceito pelos colegas da escola?" /><br />    
          <FormControlLabel control={<Checkbox />} label="Ou fica isolada / sozinha na escola?" /><br />    
          <FormControlLabel control={<Checkbox />} label="Gosta de estudar?" /><br />
          <FormControlLabel control={<Checkbox />} label="Faz as tarefas de casa?" /><br />
          <FormControlLabel control={<Checkbox />} label="Os pais estudam junto?" /><br />
          <FormControlLabel control={<Checkbox />} label="Tem hábito de leitura?" /><br />
          <FormControlLabel control={<Checkbox />} label="Tem dificuldade de leitura?" /><br />
          <FormControlLabel control={<Checkbox />} label="Tem dificuldade de escrita?" /><br />
          <FormControlLabel control={<Checkbox />} label="Tem dificuldade com matemática?" /><br />
          <FormControlLabel control={<Checkbox />} label="Faz ou já fez reforço escolar?" /><br />
          <FormControlLabel control={<Checkbox />} label="O paciente gosta do reforço escolar?" /><br />

          <TextField id="principais-dificuldades"
            label="Quais as principais dificuldades enfrentadas na escola pelo paciente?"
            placeholder="Quais as principais dificuldades enfrentadas na escola pelo paciente?"
            fullWidth multiline rows={3}
          />

          <TextField id="avaliacao-da-escola"
            label="O que você acha da escola?"
            placeholder="O que você acha da escola?"
            fullWidth multiline rows={3}
          />


          <FormControlLabel
            control={<Checkbox checked={isExtraCurricularChecked} onChange={handleExtraCurricularChange} />}
            label="É inquieto na escola?"
          /><br />
          {isExtraCurricularChecked && (
            <TextField id="inquieto"
              label="Em quais circunstâncias o paciente fica inquieto na escola?"
              placeholder="Em quais circunstâncias o paciente fica inquieto na escola?"
              fullWidth multiline rows={3}
            />
          )}

          <FormControlLabel
            control={<Checkbox checked={isExtraCurricularChecked} onChange={handleExtraCurricularChange} />}
            label="Já houve problemas com professores?"
          /><br />
          {isExtraCurricularChecked && (
            <>
            <TextField id="problemas-com-professores"
              label="Quais problemas o paciente já teve com os professores?"
              placeholder="Quais problemas o paciente já teve com os professores?"
              fullWidth multiline rows={3}
            /><br /><br />
            </>
          )}

          <TextField id="avaliacao-dos-professores"
            label="O que os professores acham do paciente?"
            placeholder="O que os professores acham do paciente?"
            fullWidth multiline rows={3}
          />


          <FormControlLabel
            control={<Checkbox checked={isExtraCurricularChecked} onChange={handleExtraCurricularChange} />}
            label="Já repetiu de ano / série?"
          /><br />
          {isExtraCurricularChecked && (
            <TextField id="mudou-de-escola"
              label="Qual ano / série o paciente já repetiu?"
              placeholder="Qual ano / série o paciente já repetiu?"
              fullWidth multiline rows={3}
            />
          )}

          <FormControlLabel
            control={<Checkbox checked={isExtraCurricularChecked} onChange={handleExtraCurricularChange} />}
            label="O paciente já mudou de escola?"
          /><br />
          {isExtraCurricularChecked && (
            <TextField id="mudou-de-escola"
              label="Por que o paciente mudou de escola?"
              placeholder="Por que o paciente mudou de escola?"
              fullWidth multiline rows={3}
            />
          )}
        </Grid>
      </Grid>
















      <h3 style={{
        color: '#444',
        marginBottom: 0,
        marginTop: '3rem',
        paddingBottom: 0
        }}
      >
        Sexualidade
      </h3>

      <Divider sx={{mb: '1rem',}}/>

      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <FormControlLabel control={<Checkbox />} label="Apresenta menstruação?" />
          <TextField id='menarca' label="Com qual idade apresentou a menarca?" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <FormControlLabel control={<Checkbox />} label="Faz uso de Anticoncepcional?" />
          <TextField id='anticoncepcional' label="Qual?" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <FormControlLabel control={<Checkbox />} label="Polução Noturna?" />
          <TextField id='polucao' label="Com que idade foi a primeira polução?" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <FormControlLabel control={<Checkbox />} label="Tem curiosidade sexual?" />
          <FormControlLabel control={<Checkbox />} label="Os pais ou responsáveis conversam sobre isso com o paciente?" />
        </Grid>

        <Grid xs={12} md={6}>
          <FormControlLabel control={<Checkbox />} label="Recebeu orientação sexual?" />
          <TextField id='orientador-sexual' label="De quem?" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <FormControlLabel control={<Checkbox />} label="Sexualmente ativo?" />
          <TextField id='expericencia-sexual' label="Com que idade teve a primeira relação sexual?" fullWidth variant="outlined" />
        </Grid>
      </Grid>


      <h3 style={{
        color: '#444',
        marginBottom: 0,
        marginTop: '3rem',
        paddingBottom: 0
        }}
      >
        Aspectos Sócio-Ambientais
      </h3>

      <Divider sx={{mb: '2rem',}}/>

      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="escolaridadeMae">Prefere brincar / ficar sozinho ou com amigos?</InputLabel>
            <Select
              id="sociabilidade"
              value={sociabilidade}
              label="Prefere brincar / ficar sozinho ou com amigos?"
              onChange={handleChange}
            >
              <MenuItem value="sozinho">
                Sozinho
              </MenuItem>
              <MenuItem value="amigos">
                Com amigos
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={12}>
          <TextField
            id="brincadeiras"
            label="Qual sua brincadeira ou brinquedo favorito?"
            fullWidth
            multiline
            rows={3}
          />
        </Grid>

        <Grid xs={12}>
          <FormControlLabel control={<Checkbox />} label="Faz amigos com facilidade?" /><br />
          <FormControlLabel control={<Checkbox />} label="Adapta-se facilmente ao ambiente onde se encontra?" /><br />
        </Grid>

        <Grid xs={12}>
          <TextField
            id="relacionamento-pais"
            label="Como é o relacionamento do paciente com os PAIS (ou responsáveis)?"
            fullWidth
            multiline
            rows={3}
          />
        </Grid>

        <Grid xs={12}>
          <TextField
            id="relacionamento-irmaos"
            label="Como é o relacionamento com os IRMÃOS?"
            fullWidth
            multiline
            rows={3}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <TextField
            id="castigos"
            label="Quais as medidas disciplinares normalmente usadas com o paciente?"
            fullWidth
            multiline
            placeholder="Quais as medidas disciplinares normalmente usadas com o paciente?"
            rows={3}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <TextField
            id="carrascos"
            label="Quem as usa?"
            fullWidth
            multiline
            rows={3}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <TextField
            id="reacoes-frente-aos-castigos"
            label="Quais são as reações do paciente frente essas medidas?"
            fullWidth
            multiline
            placeholder="Quais são as reações do paciente frente essas medidas?"
            rows={3}
          />
        </Grid>

      </Grid>






      <Divider sx={{my: '2rem ',}}/>

      <Grid container spacing={2}>

        <Grid xs={12}>
          Características Afetivo-Emocionais:
        </Grid>

        <Grid xs={12}>
          <TextField
            id="emocoes"
            label="Como é o paciente do ponto de vista emocional?"
            fullWidth
            multiline
            rows={3}
          />
        </Grid>

        <Grid xs={12}>
          <TextField
            id="demonstra-emocoes"
            label="O paciente demonstra emoções?"
            fullWidth
            multiline
            placeholder="O paciente sorri, chora, demonstra emoções ou é resistente a demonstrar emoções?"
            rows={3}
          />
        </Grid>


        <Grid xs={12} md={4}>
          <FormControlLabel control={<Checkbox />} label="É tímido ou introvertido?" /><br />
          <FormControlLabel control={<Checkbox />} label="É desatento?" /><br />
        </Grid>

        <Grid xs={12} md={4}>
          <FormControlLabel control={<Checkbox />} label="É agitado ou inquieto?" /><br />
          <FormControlLabel control={<Checkbox />} label="É impulsivo?" /><br />
        </Grid>

        <Grid xs={12} md={4}>
          <FormControlLabel control={<Checkbox />} label="É agressivo?" /><br />
        </Grid>


        <Grid xs={12} md={4}>
          <TextField
            id="medo"
            label="Possui algum medo?"
            fullWidth
            multiline
            rows={3}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <TextField
            id="irritabilidade"
            label="O que o deixa irritado?"
            fullWidth
            multiline
            rows={3}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <TextField
            id="mansidao"
            label="O que o acalma?"
            fullWidth
            multiline
            rows={3}
          />
        </Grid>

        <Grid xs={12}>
          <TextField
              id="historias-familiares"
              label="Histórias Familiares"
              fullWidth
              multiline
              placeholder="Fatos marcantes dos pais e irmãos antes, durante e depois da entrada do paciente na família: nascimento de outros irmãos; mudanças; mortes; desemprego; separações; etc."
              rows={3}
            />
        </Grid>

        <Grid xs={12}>
          <TextField
              id="atividades-diarias"
              label="Atividades Diárias da Criança"
              fullWidth
              multiline
              placeholder="Rotina do paciente. Atividades diárias do dia-a-dia."
              rows={3}
            />
        </Grid>

        <Grid xs={12}>
          <TextField
              id="qualidades"
              label="Descreva as QUALIDADES da criança / adolescente:"
              fullWidth
              multiline
              rows={3}
            />
        </Grid>

        <Grid xs={12}>
          <TextField
              id="dificuldades"
              label="Descreva as DIFICULDADES da criança / adolescente:"
              fullWidth
              multiline
              rows={3}
            />
        </Grid>

        <Grid xs={12}>
          <TextField
              id="preocupacoes"
              label="Qual a sua maior preocupação em relação ao seu filho?"
              fullWidth
              multiline
              rows={3}
            />
        </Grid>


        <Grid xs={12}>
          <TextField
              id="observacoes"
              label="Observações"
              fullWidth
              multiline
              rows={3}
            />
        </Grid>
      </Grid>





    </>
  )
}

export default Anamnese