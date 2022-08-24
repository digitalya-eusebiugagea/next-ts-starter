import { Typography } from 'antd';
import React from 'react';

import dataPrivacyStaticData from '@/data-privacy.json';
import AppLayout from '@/layouts/AppLayout';
import Paragraphs from '@/ui-kit/Paragraphs';

const DataPrivacyPage = () => {
  return (
    <AppLayout>
      <div className='legal-info-page'>
        <Typography.Title className='legal-info-page__title'>
          Datenschutzrichtlinie
        </Typography.Title>
        {dataPrivacyStaticData.map((item) => (
          <React.Fragment key={item.title}>
            <Typography.Title level={2} className='legal-info-page__paragraph-title'>
              {item.title}
            </Typography.Title>
            <Paragraphs
              paragraphs={item.paragraphs}
              paragraphProps={{ className: 'legal-info-page__paragraph-text' }}
            />
          </React.Fragment>
        ))}
        <ol>
          <li>die Zwecke, zu denen die personenbezogenen Daten verarbeitet werden;</li>
          <li>die Kategorien von personenbezogenen Daten, welche verarbeitet werden;</li>
          <li>
            die Empfänger bzw. die Kategorien von Empfängern, gegenüber denen die Sie betreffenden
            personenbezogenen Daten offengelegt wurden oder noch offengelegt werden;
          </li>
          <li>
            die geplante Dauer der Speicherung der Sie betreffenden personenbezogenen Daten oder,
            falls konkrete Angaben hierzu nicht möglich sind, Kriterien für die Festlegung der
            Speicherdauer;
          </li>
          <li>
            das Bestehen eines Rechts auf Berichtigung oder Löschung der Sie betreffenden
            personenbezogenen Daten, eines Rechts auf Einschränkung der Verarbeitung durch den
            Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung;
          </li>
          <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;</li>
          <li>
            alle verfügbaren Informationen über die Herkunft der Daten, wenn die personenbezogenen
            Daten nicht bei der betroffenen Person erhoben werden;
          </li>
          <li>
            das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß
            Art. 22 Abs. 1 und 4 DSGVO und – zumindest in diesen Fällen – aussagekräftige
            Informationen über die involvierte Logik sowie die Tragweite und die angestrebten
            Auswirkungen einer derartigen Verarbeitung für die betroffene Person.
          </li>
        </ol>
        <p className='legal-info-page__paragraph-text'>
          Ihnen steht das Recht zu, Auskunft darüber zu verlangen, ob die Sie betreffenden
          personenbezogenen Daten in ein Drittland oder an eine internationale Organisation
          übermittelt werden. In diesem Zusammenhang können Sie verlangen, über die geeigneten
          Garantien gem. Art. 46 DSGVO im Zusammenhang mit der Übermittlung unterrichtet zu werden.
        </p>
        <Typography.Title level={2} className='legal-info-page__paragraph-title'>
          2. Recht auf Berichtigung
        </Typography.Title>
        <p className='legal-info-page__paragraph-text'>
          Sie haben ein Recht auf Berichtigung und/oder Vervollständigung gegenüber dem
          Verantwortlichen, sofern die verarbeiteten personenbezogenen Daten, die Sie betreffen,
          unrichtig oder unvollständig sind. Der Verantwortliche hat die Berichtigung unverzüglich
          vorzunehmen.
        </p>
        <Typography.Title level={2} className='legal-info-page__paragraph-title'>
          3. Recht auf Einschränkung der Verarbeitung
        </Typography.Title>
        <p className='legal-info-page__paragraph-text'>
          Unter den folgenden Voraussetzungen können Sie die Einschränkung der Verarbeitung der Sie
          betreffenden personenbezogenen Daten verlangen:
        </p>
        <ol>
          <li>
            wenn Sie die Richtigkeit der Sie betreffenden personenbezogenen für eine Dauer
            bestreiten, die es dem Verantwortlichen ermöglicht, die Richtigkeit der
            personenbezogenen Daten zu überprüfen;
          </li>
          <li>
            die Verarbeitung unrechtmäßig ist und Sie die Löschung der personenbezogenen Daten
            ablehnen und stattdessen die Einschränkung der Nutzung der personenbezogenen Daten
            verlangen;
          </li>
          <li>
            der Verantwortliche die personenbezogenen Daten für die Zwecke der Verarbeitung nicht
            länger benötigt, Sie diese jedoch zur Geltendmachung, Ausübung oder Verteidigung von
            Rechtsansprüchen benötigen, oder
          </li>
          <li>
            wenn Sie Widerspruch gegen die Verarbeitung gemäß Art. 21 Abs. 1 DSGVO eingelegt haben
            und noch nicht feststeht, ob die berechtigten Gründe des Verantwortlichen gegenüber
            Ihren Gründen überwiegen.
          </li>
        </ol>
        <p className='legal-info-page__paragraph-text'>
          Wurde die Verarbeitung der Sie betreffenden personenbezogenen Daten eingeschränkt, dürfen
          diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur
          Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte
          einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen
          öffentlichen Interesses der Union oder eines Mitgliedstaats verarbeitet werden. Wurde die
          Einschränkung der Verarbeitung nach den o.g. Voraussetzungen eingeschränkt, werden Sie von
          dem Verantwortlichen unterrichtet bevor die Einschränkung aufgehoben wird.
        </p>
        <Typography.Title level={2} className='legal-info-page__paragraph-title'>
          4. Recht auf Löschung
        </Typography.Title>
        <Typography.Title level={2} className='legal-info-page__paragraph-title'>
          a) Löschungspflicht
        </Typography.Title>
        <p className='legal-info-page__paragraph-text'>
          Sie können von dem Verantwortlichen verlangen, dass die Sie betreffenden personenbezogenen
          Daten unverzüglich gelöscht werden, und der Verantwortliche ist verpflichtet, diese Daten
          unverzüglich zu löschen, sofern einer der folgenden Gründe zutrifft:
        </p>
        <ol>
          <li>
            Die Sie betreffenden personenbezogenen Daten sind für die Zwecke, für die sie erhoben
            oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig.
          </li>
          <li>
            Sie widerrufen Ihre Einwilligung, auf die sich die Verarbeitung gem. Art. 6 Abs. 1 lit.
            a oder Art. 9 Abs. 2 lit. a DSGVO stützte, und es fehlt an einer anderweitigen
            Rechtsgrundlage für die Verarbeitung.
          </li>
          <li>
            Sie legen gem. Art. 21 Abs. 1 DSGVO Widerspruch gegen die Verarbeitung ein und es liegen
            keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder Sie legen gem. Art.
            21 Abs. 2 DSGVO Widerspruch gegen die Verarbeitung ein.
          </li>
          <li>Die Sie betreffenden personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
          <li>
            Die Löschung der Sie betreffenden personenbezogenen Daten ist zur Erfüllung einer
            rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten
            erforderlich, dem der Verantwortliche unterliegt.
          </li>
          <li>
            Die Sie betreffenden personenbezogenen Daten wurden in Bezug auf angebotene Dienste der
            Informationsgesellschaft gemäß Art. 8 Abs. 1 DSGVO erhoben.
          </li>
        </ol>
        <Typography.Title level={2} className='legal-info-page__paragraph-title'>
          b) Information an Dritte
        </Typography.Title>
        <p className='legal-info-page__paragraph-text'>
          Hat der Verantwortliche die Sie betreffenden personenbezogenen Daten öffentlich gemacht
          und ist er gem. Art. 17 Abs. 1 DSGVO zu deren Löschung verpflichtet, so trifft er unter
          Berücksichtigung der verfügbaren Technologie und der Implementierungskosten angemessene
          Maßnahmen, auch technischer Art, um für die Datenverarbeitung Verantwortliche, die die
          personenbezogenen Daten verarbeiten, darüber zu informieren, dass Sie als betroffene
          Person von ihnen die Löschung aller Links zu diesen personenbezogenen Daten oder von
          Kopien oder Replikationen dieser personenbezogenen Daten verlangt haben.
        </p>
        <Typography.Title level={2} className='legal-info-page__paragraph-title'>
          c) Ausnahmen
        </Typography.Title>
        <p className='legal-info-page__paragraph-text'>
          Das Recht auf Löschung besteht nicht, soweit die Verarbeitung erforderlich ist
        </p>
        <ol>
          <li>zur Ausübung des Rechts auf freie Meinungsäußerung und Information;</li>
          <li>
            zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der
            Union oder der Mitgliedstaaten, dem der Verantwortliche unterliegt, erfordert, oder zur
            Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung
            öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde;
          </li>
          <li>
            aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit gemäß
            Art. 9 Abs. 2 lit. h und i sowie Art. 9 Abs. 3 DSGVO;
          </li>
          <li>
            für im öffentlichen Interesse liegende Archivzwecke, wissenschaftliche oder historische
            Forschungszwecke oder für statistische Zwecke gem. Art. 89 Abs. 1 DSGVO, soweit das
            unter Abschnitt a) genannte Recht voraussichtlich die Verwirklichung der Ziele dieser
            Verarbeitung unmöglich macht oder ernsthaft beeinträchtigt, oder
          </li>
          <li>zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</li>
        </ol>
        <Typography.Title level={2} className='legal-info-page__paragraph-title'>
          5. Recht auf Unterrichtung
        </Typography.Title>
        <p className='legal-info-page__paragraph-text'>
          Haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung
          gegenüber dem Verantwortlichen geltend gemacht, ist dieser verpflichtet, allen Empfängern,
          denen die Sie betreffenden personenbezogenen Daten offengelegt wurden, diese Berichtigung
          oder Löschung der Daten oder Einschränkung der Verarbeitung mitzuteilen, es sei denn, dies
          erweist sich als unmöglich oder ist mit einem unverhältnismäßigen Aufwand verbunden.
        </p>
        <p className='legal-info-page__paragraph-text'>
          Ihnen steht gegenüber dem Verantwortlichen das Recht zu, über diese Empfänger unterrichtet
          zu werden.
        </p>
        <Typography.Title level={2} className='legal-info-page__paragraph-title'>
          6. Recht auf Datenübertragbarkeit
        </Typography.Title>
        <p className='legal-info-page__paragraph-text'>
          Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie dem
          Verantwortlichen bereitgestellt haben, in einem strukturierten, gängigen und
          maschinenlesbaren Format zu erhalten. Außerdem haben Sie das Recht diese Daten einem
          anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die
          personenbezogenen Daten bereitgestellt wurden, zu übermitteln, sofern
        </p>
        <ol>
          <li>
            die Verarbeitung auf einer Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO oder Art. 9 Abs.
            2 lit. a DSGVO oder auf einem Vertrag gem. Art. 6 Abs. 1 lit. b DSGVO beruht und
          </li>
          <li>die Verarbeitung mithilfe automatisierter Verfahren erfolgt.</li>
        </ol>
        <p className='legal-info-page__paragraph-text'>
          In Ausübung dieses Rechts haben Sie ferner das Recht, zu erwirken, dass die Sie
          betreffenden personenbezogenen Daten direkt von einem Verantwortlichen einem anderen
          Verantwortlichen übermittelt werden, soweit dies technisch machbar ist. Freiheiten und
          Rechte anderer Personen dürfen hierdurch nicht beeinträchtigt werden. Das Recht auf
          Datenübertragbarkeit gilt nicht für eine Verarbeitung personenbezogener Daten, die für die
          Wahrnehmung einer Aufgabe erforderlich ist, die im öffentlichen Interesse liegt oder in
          Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde.
        </p>
        <Typography.Title level={2} className='legal-info-page__paragraph-title'>
          7. Widerspruchsrecht
        </Typography.Title>
        <p className='legal-info-page__paragraph-text'>
          Sie haben das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben,
          jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die
          aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt
          auch für ein auf diese Bestimmungen gestütztes Profiling.
        </p>
        <p className='legal-info-page__paragraph-text'>
          Der Verantwortliche verarbeitet die Sie betreffenden personenbezogenen Daten nicht mehr,
          es sei denn, er kann zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die
          Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der
          Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen. Werden die Sie
          betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie
          das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden
          personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das
          Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Widersprechen Sie der
          Verarbeitung für Zwecke der Direktwerbung, so werden die Sie betreffenden
          personenbezogenen Daten nicht mehr für diese Zwecke verarbeitet. Sie haben die
          Möglichkeit, im Zusammenhang mit der Nutzung von Diensten der Informationsgesellschaft –
          ungeachtet der Richtlinie 2002/58/EG – Ihr Widerspruchsrecht mittels automatisierter
          Verfahren auszuüben, bei denen technische Spezifikationen verwendet werden.
        </p>
        <Typography.Title level={2} className='legal-info-page__paragraph-title'>
          8. Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung
        </Typography.Title>
        <p className='legal-info-page__paragraph-text'>
          Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung jederzeit zu
          widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der
          Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
        </p>
        <Typography.Title level={2} className='legal-info-page__paragraph-title'>
          9. Automatisierte Entscheidung im Einzelfall einschließlich Profiling
        </Typography.Title>
        <p className='legal-info-page__paragraph-text'>
          Sie haben das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung –
          einschließlich Profiling – beruhenden Entscheidung unterworfen zu werden, die Ihnen
          gegenüber rechtliche Wirkung entfaltet oder Sie in ähnlicher Weise erheblich
          beeinträchtigt. Dies gilt nicht, wenn die Entscheidung
        </p>
        <ol>
          <li>
            für den Abschluss oder die Erfüllung eines Vertrags zwischen Ihnen und dem
            Verantwortlichen erforderlich ist,
          </li>
          <li>
            aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der
            Verantwortliche unterliegt, zulässig ist und diese Rechtsvorschriften angemessene
            Maßnahmen zur Wahrung Ihrer Rechte und Freiheiten sowie Ihrer berechtigten Interessen
            enthalten oder
          </li>
          <li>mit Ihrer ausdrücklichen Einwilligung erfolgt.</li>
        </ol>
        <p className='legal-info-page__paragraph-text'>
          Allerdings dürfen diese Entscheidungen nicht auf besonderen Kategorien personenbezogener
          Daten nach Art. 9 Abs. 1 DSGVO beruhen, sofern nicht Art. 9 Abs. 2 lit. a oder g gilt und
          angemessene Maßnahmen zum Schutz der Rechte und Freiheiten sowie Ihrer berechtigten
          Interessen getroffen wurden.
        </p>
        <p className='legal-info-page__paragraph-text'>
          Hinsichtlich der in (1) und (3) genannten Fälle trifft der Verantwortliche angemessene
          Maßnahmen, um die Rechte und Freiheiten sowie Ihre berechtigten Interessen zu wahren, wozu
          mindestens das Recht auf Erwirkung des Eingreifens einer Person seitens des
          Verantwortlichen, auf Darlegung des eigenen Standpunkts und auf Anfechtung der
          Entscheidung gehört.
        </p>
        <Typography.Title level={2} className='legal-info-page__paragraph-title'>
          10. Recht auf Beschwerde bei einer Aufsichtsbehörde
        </Typography.Title>
        <p className='legal-info-page__paragraph-text'>
          Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs
          steht Ihnen das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem
          Mitgliedstaat ihres Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen
          Verstoßes, zu, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden
          personenbezogenen Daten gegen die DSGVO verstößt.
        </p>
        <p className='legal-info-page__paragraph-text'>
          Die Aufsichtsbehörde, bei der die Beschwerde eingereicht wurde, unterrichtet den
          Beschwerdeführer über den Stand und die Ergebnisse der Beschwerde einschließlich der
          Möglichkeit eines gerichtlichen Rechtsbehelfs nach Art. 78 DSGVO.
        </p>
      </div>
    </AppLayout>
  );
};

export default DataPrivacyPage;
