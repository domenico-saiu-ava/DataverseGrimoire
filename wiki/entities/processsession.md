---
logical: "processsession"
display: "Process Session"
entitySetName: "processsessions"
primaryId: "processsessionid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Process Session

Information that is generated when a dialog is run. Every time that you run a dialog, a dialog session is created.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `processsession` |
| Display name | Process Session |
| Display (plural) | Process Sessions |
| Schema name | `ProcessSession` |
| Entity set (Web API) | `processsessions` |
| Primary id attribute | `processsessionid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/processsessions?$select=name&$top=10
GET /api/data/v9.2/processsessions(<guid>)
POST /api/data/v9.2/processsessions
PATCH /api/data/v9.2/processsessions(<guid>)
DELETE /api/data/v9.2/processsessions(<guid>)
```

## Attributes

Writable: **23** · Read-only: **16**

### Writable

`ActivityName`, `CanceledOn`, `Comments`, `CompletedOn`, `ErrorCode`, `ExecutedBy`, `InputArguments`, `Name`, `NextLinkedSessionId`, `OriginatingSessionId`, `OwnerId`, `OwnerIdType`, `PreviousLinkedSessionId`, `ProcessId`, `ProcessSessionId`, `ProcessStageName`, `ProcessState`, `RegardingObjectId`, `RegardingObjectTypeCode`, `StartedOn`, `StateCode`, `StatusCode`, `StepName`

### Read-only

`CanceledBy`, `CompletedBy`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExecutedOn`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `ProtectionKey`, `StartedBy`

## Relationships

### Many-to-One (357)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Account_ProcessSessions` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account` |
| `activityfileattachment_ProcessSession` | [activityfileattachment](activityfileattachment.md) | `regardingobjectid` | `regardingobjectid_activityfileattachment` |
| `adx_externalidentity_ProcessSession` | [adx_externalidentity](adx_externalidentity.md) | `regardingobjectid` | `regardingobjectid_adx_externalidentity` |
| `adx_invitation_ProcessSession` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation` |
| `adx_inviteredemption_ProcessSession` | [adx_inviteredemption](adx_inviteredemption.md) | `regardingobjectid` | `regardingobjectid_adx_inviteredemption` |
| `adx_portalcomment_ProcessSession` | [adx_portalcomment](adx_portalcomment.md) | `regardingobjectid` | `regardingobjectid_adx_portalcomment` |
| `adx_setting_ProcessSession` | [adx_setting](adx_setting.md) | `regardingobjectid` | `regardingobjectid_adx_setting` |
| `adx_webformsession_ProcessSession` | [adx_webformsession](adx_webformsession.md) | `regardingobjectid` | `regardingobjectid_adx_webformsession` |
| `aicopilot_ProcessSession` | [aicopilot](aicopilot.md) | `regardingobjectid` | `regardingobjectid_aicopilot` |
| `aiplugin_ProcessSession` | [aiplugin](aiplugin.md) | `regardingobjectid` | `regardingobjectid_aiplugin` |
| `aipluginauth_ProcessSession` | [aipluginauth](aipluginauth.md) | `regardingobjectid` | `regardingobjectid_aipluginauth` |
| `aipluginconversationstarter_ProcessSession` | [aipluginconversationstarter](aipluginconversationstarter.md) | `regardingobjectid` | `regardingobjectid_aipluginconversationstarter` |
| `aipluginconversationstartermapping_ProcessSession` | [aipluginconversationstartermapping](aipluginconversationstartermapping.md) | `regardingobjectid` | `regardingobjectid_aipluginconversationstartermapping` |
| `aipluginexternalschema_ProcessSession` | [aipluginexternalschema](aipluginexternalschema.md) | `regardingobjectid` | `regardingobjectid_aipluginexternalschema` |
| `aipluginexternalschemaproperty_ProcessSession` | [aipluginexternalschemaproperty](aipluginexternalschemaproperty.md) | `regardingobjectid` | `regardingobjectid_aipluginexternalschemaproperty` |
| `aiplugingovernance_ProcessSession` | [aiplugingovernance](aiplugingovernance.md) | `regardingobjectid` | `regardingobjectid_aiplugingovernance` |
| `aiplugingovernanceext_ProcessSession` | [aiplugingovernanceext](aiplugingovernanceext.md) | `regardingobjectid` | `regardingobjectid_aiplugingovernanceext` |
| `aiplugininstance_ProcessSession` | [aiplugininstance](aiplugininstance.md) | `regardingobjectid` | `regardingobjectid_aiplugininstance` |
| `aipluginoperation_ProcessSession` | [aipluginoperation](aipluginoperation.md) | `regardingobjectid` | `regardingobjectid_aipluginoperation` |
| `aipluginoperationparameter_ProcessSession` | [aipluginoperationparameter](aipluginoperationparameter.md) | `regardingobjectid` | `regardingobjectid_aipluginoperationparameter` |
| `aipluginoperationresponsetemplate_ProcessSession` | [aipluginoperationresponsetemplate](aipluginoperationresponsetemplate.md) | `regardingobjectid` | `regardingobjectid_aipluginoperationresponsetemplate` |
| `aiplugintitle_ProcessSession` | [aiplugintitle](aiplugintitle.md) | `regardingobjectid` | `regardingobjectid_aiplugintitle` |
| `aipluginusersetting_ProcessSession` | [aipluginusersetting](aipluginusersetting.md) | `regardingobjectid` | `regardingobjectid_aipluginusersetting` |
| `allowedmcpclient_ProcessSession` | [allowedmcpclient](allowedmcpclient.md) | `regardingobjectid` | `regardingobjectid_allowedmcpclient` |
| `Annotation_ProcessSessions` | [annotation](annotation.md) | `regardingobjectid` | `regardingobjectid_annotation` |
| `appaction_ProcessSession` | [appaction](appaction.md) | `regardingobjectid` | `regardingobjectid_appaction` |
| `appactionmigration_ProcessSession` | [appactionmigration](appactionmigration.md) | `regardingobjectid` | `regardingobjectid_appactionmigration` |
| `appactionrule_ProcessSession` | [appactionrule](appactionrule.md) | `regardingobjectid` | `regardingobjectid_appactionrule` |
| `application_ProcessSession` | [application](application.md) | `regardingobjectid` | `regardingobjectid_application` |
| `applicationuser_ProcessSession` | [applicationuser](applicationuser.md) | `regardingobjectid` | `regardingobjectid_applicationuser` |
| `Appointment_ProcessSessions` | [appointment](appointment.md) | `regardingobjectid` | `regardingobjectid_appointment` |
| `approvalprocess_ProcessSession` | [approvalprocess](approvalprocess.md) | `regardingobjectid` | `regardingobjectid_approvalprocess` |
| `approvalstageapproval_ProcessSession` | [approvalstageapproval](approvalstageapproval.md) | `regardingobjectid` | `regardingobjectid_approvalstageapproval` |
| `approvalstagecondition_ProcessSession` | [approvalstagecondition](approvalstagecondition.md) | `regardingobjectid` | `regardingobjectid_approvalstagecondition` |
| `approvalstageintelligent_ProcessSession` | [approvalstageintelligent](approvalstageintelligent.md) | `regardingobjectid` | `regardingobjectid_approvalstageintelligent` |
| `approvalstageorder_ProcessSession` | [approvalstageorder](approvalstageorder.md) | `regardingobjectid` | `regardingobjectid_approvalstageorder` |
| `attributeclusterconfig_ProcessSession` | [attributeclusterconfig](attributeclusterconfig.md) | `regardingobjectid` | `regardingobjectid_attributeclusterconfig` |
| `attributemaskingrule_ProcessSession` | [attributemaskingrule](attributemaskingrule.md) | `regardingobjectid` | `regardingobjectid_attributemaskingrule` |
| `bot_ProcessSession` | [bot](bot.md) | `regardingobjectid` | `regardingobjectid_bot` |
| `botcomponent_ProcessSession` | [botcomponent](botcomponent.md) | `regardingobjectid` | `regardingobjectid_botcomponent` |
| `botcomponentcollection_ProcessSession` | [botcomponentcollection](botcomponentcollection.md) | `regardingobjectid` | `regardingobjectid_botcomponentcollection` |
| `businessprocess_ProcessSession` | [businessprocess](businessprocess.md) | `regardingobjectid` | `regardingobjectid_businessprocess` |
| `BusinessUnit_ProcessSessions` | [businessunit](businessunit.md) | `regardingobjectid` | `regardingobjectid_businessunit` |
| `BusinessUnitNewsArticle_ProcessSessions` | [businessunitnewsarticle](businessunitnewsarticle.md) | `regardingobjectid` | `regardingobjectid_businessunitnewsarticle` |
| `card_ProcessSession` | [card](card.md) | `regardingobjectid` | `regardingobjectid_card` |
| `catalog_ProcessSession` | [catalog](catalog.md) | `regardingobjectid` | `regardingobjectid_catalog` |
| `catalogassignment_ProcessSession` | [catalogassignment](catalogassignment.md) | `regardingobjectid` | `regardingobjectid_catalogassignment` |
| `certificatecredential_ProcessSession` | [certificatecredential](certificatecredential.md) | `regardingobjectid` | `regardingobjectid_certificatecredential` |
| `chat_ProcessSession` | [chat](chat.md) | `regardingobjectid` | `regardingobjectid_chat` |
| `Connection_ProcessSessions` | [connection](connection.md) | `regardingobjectid` | `regardingobjectid_connection` |
| `connectioninstance_ProcessSession` | [connectioninstance](connectioninstance.md) | `regardingobjectid` | `regardingobjectid_connectioninstance` |
| `connectionreference_ProcessSession` | [connectionreference](connectionreference.md) | `regardingobjectid` | `regardingobjectid_connectionreference` |
| `ConnectionRole_ProcessSessions` | [connectionrole](connectionrole.md) | `regardingobjectid` | `regardingobjectid_connectionrole` |
| `connector_ProcessSession` | [connector](connector.md) | `regardingobjectid` | `regardingobjectid_connector` |
| `Contact_ProcessSessions` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact` |
| `conversationtranscript_ProcessSession` | [conversationtranscript](conversationtranscript.md) | `regardingobjectid` | `regardingobjectid_conversationtranscript` |
| `copilotexamplequestion_ProcessSession` | [copilotexamplequestion](copilotexamplequestion.md) | `regardingobjectid` | `regardingobjectid_copilotexamplequestion` |
| `copilotglossaryterm_ProcessSession` | [copilotglossaryterm](copilotglossaryterm.md) | `regardingobjectid` | `regardingobjectid_copilotglossaryterm` |
| `copilotsynonyms_ProcessSession` | [copilotsynonyms](copilotsynonyms.md) | `regardingobjectid` | `regardingobjectid_copilotsynonyms` |
| `credential_ProcessSession` | [credential](credential.md) | `regardingobjectid` | `regardingobjectid_credential` |
| `customapi_ProcessSession` | [customapi](customapi.md) | `regardingobjectid` | `regardingobjectid_customapi` |
| `customapirequestparameter_ProcessSession` | [customapirequestparameter](customapirequestparameter.md) | `regardingobjectid` | `regardingobjectid_customapirequestparameter` |
| `customapiresponseproperty_ProcessSession` | [customapiresponseproperty](customapiresponseproperty.md) | `regardingobjectid` | `regardingobjectid_customapiresponseproperty` |
| `CustomerAddress_ProcessSessions` | [customeraddress](customeraddress.md) | `regardingobjectid` | `regardingobjectid_customeraddress` |
| `datalakefolder_ProcessSession` | [datalakefolder](datalakefolder.md) | `regardingobjectid` | `regardingobjectid_datalakefolder` |
| `datalakefolderpermission_ProcessSession` | [datalakefolderpermission](datalakefolderpermission.md) | `regardingobjectid` | `regardingobjectid_datalakefolderpermission` |
| `datalakeworkspace_ProcessSession` | [datalakeworkspace](datalakeworkspace.md) | `regardingobjectid` | `regardingobjectid_datalakeworkspace` |
| `datalakeworkspacepermission_ProcessSession` | [datalakeworkspacepermission](datalakeworkspacepermission.md) | `regardingobjectid` | `regardingobjectid_datalakeworkspacepermission` |
| `dataprocessingconfiguration_ProcessSession` | [dataprocessingconfiguration](dataprocessingconfiguration.md) | `regardingobjectid` | `regardingobjectid_dataprocessingconfiguration` |
| `delegatedauthorization_ProcessSession` | [delegatedauthorization](delegatedauthorization.md) | `regardingobjectid` | `regardingobjectid_delegatedauthorization` |
| `desktopflowbinary_ProcessSession` | [desktopflowbinary](desktopflowbinary.md) | `regardingobjectid` | `regardingobjectid_desktopflowbinary` |
| `desktopflowmodule_ProcessSession` | [desktopflowmodule](desktopflowmodule.md) | `regardingobjectid` | `regardingobjectid_desktopflowmodule` |
| `dvfilesearch_ProcessSession` | [dvfilesearch](dvfilesearch.md) | `regardingobjectid` | `regardingobjectid_dvfilesearch` |
| `dvfilesearchattribute_ProcessSession` | [dvfilesearchattribute](dvfilesearchattribute.md) | `regardingobjectid` | `regardingobjectid_dvfilesearchattribute` |
| `dvfilesearchentity_ProcessSession` | [dvfilesearchentity](dvfilesearchentity.md) | `regardingobjectid` | `regardingobjectid_dvfilesearchentity` |
| `dvtablesearch_ProcessSession` | [dvtablesearch](dvtablesearch.md) | `regardingobjectid` | `regardingobjectid_dvtablesearch` |
| `dvtablesearchattribute_ProcessSession` | [dvtablesearchattribute](dvtablesearchattribute.md) | `regardingobjectid` | `regardingobjectid_dvtablesearchattribute` |
| `dvtablesearchentity_ProcessSession` | [dvtablesearchentity](dvtablesearchentity.md) | `regardingobjectid` | `regardingobjectid_dvtablesearchentity` |
| `Email_ProcessSessions` | [email](email.md) | `regardingobjectid` | `regardingobjectid_email` |
| `entityclusterconfig_ProcessSession` | [entityclusterconfig](entityclusterconfig.md) | `regardingobjectid` | `regardingobjectid_entityclusterconfig` |
| `entityrecordfilter_ProcessSession` | [entityrecordfilter](entityrecordfilter.md) | `regardingobjectid` | `regardingobjectid_entityrecordfilter` |
| `environmentvariabledefinition_ProcessSession` | [environmentvariabledefinition](environmentvariabledefinition.md) | `regardingobjectid` | `regardingobjectid_environmentvariabledefinition` |
| `environmentvariablevalue_ProcessSession` | [environmentvariablevalue](environmentvariablevalue.md) | `regardingobjectid` | `regardingobjectid_environmentvariablevalue` |
| `ExpiredProcess_ProcessSessions` | [expiredprocess](expiredprocess.md) | `regardingobjectid` | `regardingobjectid_expiredprocess` |
| `exportedexcel_ProcessSession` | [exportedexcel](exportedexcel.md) | `regardingobjectid` | `regardingobjectid_exportedexcel` |
| `exportsolutionupload_ProcessSession` | [exportsolutionupload](exportsolutionupload.md) | `regardingobjectid` | `regardingobjectid_exportsolutionupload` |
| `fabricaiskill_ProcessSession` | [fabricaiskill](fabricaiskill.md) | `regardingobjectid` | `regardingobjectid_fabricaiskill` |
| `Fax_ProcessSessions` | [fax](fax.md) | `regardingobjectid` | `regardingobjectid_fax` |
| `featurecontrolsetting_ProcessSession` | [featurecontrolsetting](featurecontrolsetting.md) | `regardingobjectid` | `regardingobjectid_featurecontrolsetting` |
| `federatedknowledgeconfiguration_ProcessSession` | [federatedknowledgeconfiguration](federatedknowledgeconfiguration.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgeconfiguration` |
| `federatedknowledgeentityconfiguration_ProcessSession` | [federatedknowledgeentityconfiguration](federatedknowledgeentityconfiguration.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgeentityconfiguration` |
| `flowcapacityassignment_ProcessSession` | [flowcapacityassignment](flowcapacityassignment.md) | `regardingobjectid` | `regardingobjectid_flowcapacityassignment` |
| `flowcredentialapplication_ProcessSession` | [flowcredentialapplication](flowcredentialapplication.md) | `regardingobjectid` | `regardingobjectid_flowcredentialapplication` |
| `flowevent_ProcessSession` | [flowevent](flowevent.md) | `regardingobjectid` | `regardingobjectid_flowevent` |
| `flowmachine_ProcessSession` | [flowmachine](flowmachine.md) | `regardingobjectid` | `regardingobjectid_flowmachine` |
| `flowmachinegroup_ProcessSession` | [flowmachinegroup](flowmachinegroup.md) | `regardingobjectid` | `regardingobjectid_flowmachinegroup` |
| `flowmachineimage_ProcessSession` | [flowmachineimage](flowmachineimage.md) | `regardingobjectid` | `regardingobjectid_flowmachineimage` |
| `flowmachineimageversion_ProcessSession` | [flowmachineimageversion](flowmachineimageversion.md) | `regardingobjectid` | `regardingobjectid_flowmachineimageversion` |
| `flowmachinenetwork_ProcessSession` | [flowmachinenetwork](flowmachinenetwork.md) | `regardingobjectid` | `regardingobjectid_flowmachinenetwork` |
| `flowsessionbinary_ProcessSession` | [flowsessionbinary](flowsessionbinary.md) | `regardingobjectid` | `regardingobjectid_flowsessionbinary` |
| `fxexpression_ProcessSession` | [fxexpression](fxexpression.md) | `regardingobjectid` | `regardingobjectid_fxexpression` |
| `Goal_ProcessSessions` | [goal](goal.md) | `regardingobjectid` | `regardingobjectid_goal` |
| `goalrollupquery_ProcessSessions` | [goalrollupquery](goalrollupquery.md) | `regardingobjectid` | `regardingobjectid_goalrollupquery` |
| `governanceconfiguration_ProcessSession` | [governanceconfiguration](governanceconfiguration.md) | `regardingobjectid` | `regardingobjectid_governanceconfiguration` |
| `KbArticle_ProcessSessions` | [kbarticle](kbarticle.md) | `regardingobjectid` | `regardingobjectid_kbarticle` |
| `KbArticleComment_ProcessSessions` | [kbarticlecomment](kbarticlecomment.md) | `regardingobjectid` | `regardingobjectid_kbarticlecomment` |
| `KbArticleTemplate_ProcessSessions` | [kbarticletemplate](kbarticletemplate.md) | `regardingobjectid` | `regardingobjectid_kbarticletemplate` |
| `keyvaultreference_ProcessSession` | [keyvaultreference](keyvaultreference.md) | `regardingobjectid` | `regardingobjectid_keyvaultreference` |
| `knowledgearticle_ProcessSession` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle` |
| `KnowledgeBaseRecord_ProcessSession` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord` |
| `knowledgefaq_ProcessSession` | [knowledgefaq](knowledgefaq.md) | `regardingobjectid` | `regardingobjectid_knowledgefaq` |
| `Letter_ProcessSessions` | [letter](letter.md) | `regardingobjectid` | `regardingobjectid_letter` |
| `lk_processsession_canceledby` | [systemuser](systemuser.md) | `canceledby` | `canceledby` |
| `lk_processsession_completedby` | [systemuser](systemuser.md) | `completedby` | `completedby` |
| `lk_processsession_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_processsession_executedby` | [systemuser](systemuser.md) | `executedby` | `executedby` |
| `lk_processsession_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_processsession_nextlinkedsessionid` | [processsession](processsession.md) | `nextlinkedsessionid` | `nextlinkedsessionid` |
| `lk_processsession_originatingsessionid` | [processsession](processsession.md) | `originatingsessionid` | `originatingsessionid` |
| `lk_processsession_previouslinkedsessionid` | [processsession](processsession.md) | `previouslinkedsessionid` | `previouslinkedsessionid` |
| `lk_processsession_processid` | [workflow](workflow.md) | `processid` | `processid` |
| `lk_processsession_startedby` | [systemuser](systemuser.md) | `startedby` | `startedby` |
| `lk_processsessionbase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_processsessionbase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `mailbox_processsessions` | [mailbox](mailbox.md) | `regardingobjectid` | `regardingobjectid_mailbox` |
| `MailMergeTemplate_ProcessSessions` | [mailmergetemplate](mailmergetemplate.md) | `regardingobjectid` | `regardingobjectid_mailmergetemplate` |
| `mainfewshot_ProcessSession` | [mainfewshot](mainfewshot.md) | `regardingobjectid` | `regardingobjectid_mainfewshot` |
| `makerfewshot_ProcessSession` | [makerfewshot](makerfewshot.md) | `regardingobjectid` | `regardingobjectid_makerfewshot` |
| `managedidentity_ProcessSession` | [managedidentity](managedidentity.md) | `regardingobjectid` | `regardingobjectid_managedidentity` |
| `maskingrule_ProcessSession` | [maskingrule](maskingrule.md) | `regardingobjectid` | `regardingobjectid_maskingrule` |
| `mcpserver_ProcessSession` | [mcpserver](mcpserver.md) | `regardingobjectid` | `regardingobjectid_mcpserver` |
| `mcptool_ProcessSession` | [mcptool](mcptool.md) | `regardingobjectid` | `regardingobjectid_mcptool` |
| `metadataforarchival_ProcessSession` | [metadataforarchival](metadataforarchival.md) | `regardingobjectid` | `regardingobjectid_metadataforarchival` |
| `metric_ProcessSessions` | [metric](metric.md) | `regardingobjectid` | `regardingobjectid_metric` |
| `mobileofflineprofileextension_ProcessSession` | [mobileofflineprofileextension](mobileofflineprofileextension.md) | `regardingobjectid` | `regardingobjectid_mobileofflineprofileextension` |
| `msdyn_aibdataset_ProcessSession` | [msdyn_aibdataset](msdyn_aibdataset.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdataset` |
| `msdyn_aibdatasetfile_ProcessSession` | [msdyn_aibdatasetfile](msdyn_aibdatasetfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetfile` |
| `msdyn_aibdatasetrecord_ProcessSession` | [msdyn_aibdatasetrecord](msdyn_aibdatasetrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetrecord` |
| `msdyn_aibdatasetscontainer_ProcessSession` | [msdyn_aibdatasetscontainer](msdyn_aibdatasetscontainer.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetscontainer` |
| `msdyn_aibfeedbackloop_ProcessSession` | [msdyn_aibfeedbackloop](msdyn_aibfeedbackloop.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfeedbackloop` |
| `msdyn_aibfile_ProcessSession` | [msdyn_aibfile](msdyn_aibfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfile` |
| `msdyn_aibfileattacheddata_ProcessSession` | [msdyn_aibfileattacheddata](msdyn_aibfileattacheddata.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfileattacheddata` |
| `msdyn_aiconfiguration_ProcessSession` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiconfiguration` |
| `msdyn_aidataprocessingevent_ProcessSession` | [msdyn_aidataprocessingevent](msdyn_aidataprocessingevent.md) | `regardingobjectid` | `regardingobjectid_msdyn_aidataprocessingevent` |
| `msdyn_aidocumenttemplate_ProcessSession` | [msdyn_aidocumenttemplate](msdyn_aidocumenttemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_aidocumenttemplate` |
| `msdyn_aievaluationconfiguration_ProcessSession` | [msdyn_aievaluationconfiguration](msdyn_aievaluationconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievaluationconfiguration` |
| `msdyn_aievaluationrun_ProcessSession` | [msdyn_aievaluationrun](msdyn_aievaluationrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievaluationrun` |
| `msdyn_aievent_ProcessSession` | [msdyn_aievent](msdyn_aievent.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievent` |
| `msdyn_aifptrainingdocument_ProcessSession` | [msdyn_aifptrainingdocument](msdyn_aifptrainingdocument.md) | `regardingobjectid` | `regardingobjectid_msdyn_aifptrainingdocument` |
| `msdyn_aimodel_ProcessSession` | [msdyn_aimodel](msdyn_aimodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_aimodel` |
| `msdyn_aiodimage_ProcessSession` | [msdyn_aiodimage](msdyn_aiodimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodimage` |
| `msdyn_aiodlabel_ProcessSession` | [msdyn_aiodlabel](msdyn_aiodlabel.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodlabel` |
| `msdyn_aiodtrainingboundingbox_ProcessSession` | [msdyn_aiodtrainingboundingbox](msdyn_aiodtrainingboundingbox.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodtrainingboundingbox` |
| `msdyn_aiodtrainingimage_ProcessSession` | [msdyn_aiodtrainingimage](msdyn_aiodtrainingimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodtrainingimage` |
| `msdyn_aitemplate_ProcessSession` | [msdyn_aitemplate](msdyn_aitemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitemplate` |
| `msdyn_aitestcase_ProcessSession` | [msdyn_aitestcase](msdyn_aitestcase.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcase` |
| `msdyn_aitestcasedocument_ProcessSession` | [msdyn_aitestcasedocument](msdyn_aitestcasedocument.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcasedocument` |
| `msdyn_aitestcaseinput_ProcessSession` | [msdyn_aitestcaseinput](msdyn_aitestcaseinput.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcaseinput` |
| `msdyn_aitestrun_ProcessSession` | [msdyn_aitestrun](msdyn_aitestrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestrun` |
| `msdyn_aitestrunbatch_ProcessSession` | [msdyn_aitestrunbatch](msdyn_aitestrunbatch.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestrunbatch` |
| `msdyn_analysiscomponent_ProcessSession` | [msdyn_analysiscomponent](msdyn_analysiscomponent.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysiscomponent` |
| `msdyn_analysisjob_ProcessSession` | [msdyn_analysisjob](msdyn_analysisjob.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisjob` |
| `msdyn_analysisoverride_ProcessSession` | [msdyn_analysisoverride](msdyn_analysisoverride.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisoverride` |
| `msdyn_analysisresult_ProcessSession` | [msdyn_analysisresult](msdyn_analysisresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisresult` |
| `msdyn_analysisresultdetail_ProcessSession` | [msdyn_analysisresultdetail](msdyn_analysisresultdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisresultdetail` |
| `msdyn_appinsightsmetadata_ProcessSession` | [msdyn_appinsightsmetadata](msdyn_appinsightsmetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_appinsightsmetadata` |
| `msdyn_copilotinteractions_ProcessSession` | [msdyn_copilotinteractions](msdyn_copilotinteractions.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotinteractions` |
| `msdyn_customcontrolextendedsettings_ProcessSession` | [msdyn_customcontrolextendedsettings](msdyn_customcontrolextendedsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_customcontrolextendedsettings` |
| `msdyn_dataflow_datalakefolder_ProcessSession` | [msdyn_dataflow_datalakefolder](msdyn_dataflow_datalakefolder.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflow_datalakefolder` |
| `msdyn_dataflow_ProcessSession` | [msdyn_dataflow](msdyn_dataflow.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflow` |
| `msdyn_dataflowconnectionreference_ProcessSession` | [msdyn_dataflowconnectionreference](msdyn_dataflowconnectionreference.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowconnectionreference` |
| `msdyn_dataflowrefreshhistory_ProcessSession` | [msdyn_dataflowrefreshhistory](msdyn_dataflowrefreshhistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowrefreshhistory` |
| `msdyn_dataflowtemplate_ProcessSession` | [msdyn_dataflowtemplate](msdyn_dataflowtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowtemplate` |
| `msdyn_dmsrequest_ProcessSession` | [msdyn_dmsrequest](msdyn_dmsrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmsrequest` |
| `msdyn_dmsrequeststatus_ProcessSession` | [msdyn_dmsrequeststatus](msdyn_dmsrequeststatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmsrequeststatus` |
| `msdyn_dmssyncrequest_ProcessSession` | [msdyn_dmssyncrequest](msdyn_dmssyncrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmssyncrequest` |
| `msdyn_dmssyncstatus_ProcessSession` | [msdyn_dmssyncstatus](msdyn_dmssyncstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmssyncstatus` |
| `msdyn_entitylinkchatconfiguration_ProcessSession` | [msdyn_entitylinkchatconfiguration](msdyn_entitylinkchatconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_entitylinkchatconfiguration` |
| `msdyn_entityrefreshhistory_ProcessSession` | [msdyn_entityrefreshhistory](msdyn_entityrefreshhistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityrefreshhistory` |
| `msdyn_favoriteknowledgearticle_ProcessSession` | [msdyn_favoriteknowledgearticle](msdyn_favoriteknowledgearticle.md) | `regardingobjectid` | `regardingobjectid_msdyn_favoriteknowledgearticle` |
| `msdyn_federatedarticle_ProcessSession` | [msdyn_federatedarticle](msdyn_federatedarticle.md) | `regardingobjectid` | `regardingobjectid_msdyn_federatedarticle` |
| `msdyn_federatedarticleincident_ProcessSession` | [msdyn_federatedarticleincident](msdyn_federatedarticleincident.md) | `regardingobjectid` | `regardingobjectid_msdyn_federatedarticleincident` |
| `msdyn_fileupload_ProcessSession` | [msdyn_fileupload](msdyn_fileupload.md) | `regardingobjectid` | `regardingobjectid_msdyn_fileupload` |
| `msdyn_flow_actionapprovalmodel_ProcessSession` | [msdyn_flow_actionapprovalmodel](msdyn_flow_actionapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_actionapprovalmodel` |
| `msdyn_flow_approval_ProcessSession` | [msdyn_flow_approval](msdyn_flow_approval.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approval` |
| `msdyn_flow_approvalrequest_ProcessSession` | [msdyn_flow_approvalrequest](msdyn_flow_approvalrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalrequest` |
| `msdyn_flow_approvalresponse_ProcessSession` | [msdyn_flow_approvalresponse](msdyn_flow_approvalresponse.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalresponse` |
| `msdyn_flow_approvalstep_ProcessSession` | [msdyn_flow_approvalstep](msdyn_flow_approvalstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalstep` |
| `msdyn_flow_awaitallactionapprovalmodel_ProcessSession` | [msdyn_flow_awaitallactionapprovalmodel](msdyn_flow_awaitallactionapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_awaitallactionapprovalmodel` |
| `msdyn_flow_awaitallapprovalmodel_ProcessSession` | [msdyn_flow_awaitallapprovalmodel](msdyn_flow_awaitallapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_awaitallapprovalmodel` |
| `msdyn_flow_basicapprovalmodel_ProcessSession` | [msdyn_flow_basicapprovalmodel](msdyn_flow_basicapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_basicapprovalmodel` |
| `msdyn_flow_flowapproval_ProcessSession` | [msdyn_flow_flowapproval](msdyn_flow_flowapproval.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_flowapproval` |
| `msdyn_formmapping_ProcessSession` | [msdyn_formmapping](msdyn_formmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_formmapping` |
| `msdyn_function_ProcessSession` | [msdyn_function](msdyn_function.md) | `regardingobjectid` | `regardingobjectid_msdyn_function` |
| `msdyn_helppage_ProcessSession` | [msdyn_helppage](msdyn_helppage.md) | `regardingobjectid` | `regardingobjectid_msdyn_helppage` |
| `msdyn_historicalcaseharvestbatch_ProcessSession` | [msdyn_historicalcaseharvestbatch](msdyn_historicalcaseharvestbatch.md) | `regardingobjectid` | `regardingobjectid_msdyn_historicalcaseharvestbatch` |
| `msdyn_historicalcaseharvestrun_ProcessSession` | [msdyn_historicalcaseharvestrun](msdyn_historicalcaseharvestrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_historicalcaseharvestrun` |
| `msdyn_insightsstorevirtualentity_ProcessSession` | [msdyn_insightsstorevirtualentity](msdyn_insightsstorevirtualentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_insightsstorevirtualentity` |
| `msdyn_integratedsearchprovider_ProcessSession` | [msdyn_integratedsearchprovider](msdyn_integratedsearchprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_integratedsearchprovider` |
| `msdyn_kalanguagesetting_ProcessSession` | [msdyn_kalanguagesetting](msdyn_kalanguagesetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_kalanguagesetting` |
| `msdyn_kbattachment_ProcessSession` | [msdyn_kbattachment](msdyn_kbattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_kbattachment` |
| `msdyn_kmfederatedsearchconfig_ProcessSession` | [msdyn_kmfederatedsearchconfig](msdyn_kmfederatedsearchconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_kmfederatedsearchconfig` |
| `msdyn_kmpersonalizationsetting_ProcessSession` | [msdyn_kmpersonalizationsetting](msdyn_kmpersonalizationsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_kmpersonalizationsetting` |
| `msdyn_knowledgearticleimage_ProcessSession` | [msdyn_knowledgearticleimage](msdyn_knowledgearticleimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticleimage` |
| `msdyn_knowledgearticletemplate_ProcessSession` | [msdyn_knowledgearticletemplate](msdyn_knowledgearticletemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticletemplate` |
| `msdyn_knowledgeassetconfiguration_ProcessSession` | [msdyn_knowledgeassetconfiguration](msdyn_knowledgeassetconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeassetconfiguration` |
| `msdyn_knowledgeconfiguration_ProcessSession` | [msdyn_knowledgeconfiguration](msdyn_knowledgeconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeconfiguration` |
| `msdyn_knowledgeharvestjobrecord_ProcessSession` | [msdyn_knowledgeharvestjobrecord](msdyn_knowledgeharvestjobrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeharvestjobrecord` |
| `msdyn_knowledgeinteractioninsight_ProcessSession` | [msdyn_knowledgeinteractioninsight](msdyn_knowledgeinteractioninsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeinteractioninsight` |
| `msdyn_knowledgemanagementsetting_ProcessSession` | [msdyn_knowledgemanagementsetting](msdyn_knowledgemanagementsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgemanagementsetting` |
| `msdyn_knowledgepersonalfilter_ProcessSession` | [msdyn_knowledgepersonalfilter](msdyn_knowledgepersonalfilter.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgepersonalfilter` |
| `msdyn_knowledgesearchfilter_ProcessSession` | [msdyn_knowledgesearchfilter](msdyn_knowledgesearchfilter.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgesearchfilter` |
| `msdyn_knowledgesearchinsight_ProcessSession` | [msdyn_knowledgesearchinsight](msdyn_knowledgesearchinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgesearchinsight` |
| `msdyn_mobileapp_ProcessSession` | [msdyn_mobileapp](msdyn_mobileapp.md) | `regardingobjectid` | `regardingobjectid_msdyn_mobileapp` |
| `msdyn_modulerundetail_ProcessSession` | [msdyn_modulerundetail](msdyn_modulerundetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_modulerundetail` |
| `msdyn_pmanalysishistory_ProcessSession` | [msdyn_pmanalysishistory](msdyn_pmanalysishistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmanalysishistory` |
| `msdyn_pmbusinessruleautomationconfig_ProcessSession` | [msdyn_pmbusinessruleautomationconfig](msdyn_pmbusinessruleautomationconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmbusinessruleautomationconfig` |
| `msdyn_pmcalendar_ProcessSession` | [msdyn_pmcalendar](msdyn_pmcalendar.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmcalendar` |
| `msdyn_pmcalendarversion_ProcessSession` | [msdyn_pmcalendarversion](msdyn_pmcalendarversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmcalendarversion` |
| `msdyn_pminferredtask_ProcessSession` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `regardingobjectid` | `regardingobjectid_msdyn_pminferredtask` |
| `msdyn_pmprocessextendedmetadataversion_ProcessSession` | [msdyn_pmprocessextendedmetadataversion](msdyn_pmprocessextendedmetadataversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessextendedmetadataversion` |
| `msdyn_pmprocesstemplate_ProcessSession` | [msdyn_pmprocesstemplate](msdyn_pmprocesstemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocesstemplate` |
| `msdyn_pmprocessusersettings_ProcessSession` | [msdyn_pmprocessusersettings](msdyn_pmprocessusersettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessusersettings` |
| `msdyn_pmprocessversion_ProcessSession` | [msdyn_pmprocessversion](msdyn_pmprocessversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessversion` |
| `msdyn_pmrecording_ProcessSession` | [msdyn_pmrecording](msdyn_pmrecording.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmrecording` |
| `msdyn_pmsimulation_ProcessSession` | [msdyn_pmsimulation](msdyn_pmsimulation.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmsimulation` |
| `msdyn_pmtab_ProcessSession` | [msdyn_pmtab](msdyn_pmtab.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmtab` |
| `msdyn_pmtemplate_ProcessSession` | [msdyn_pmtemplate](msdyn_pmtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmtemplate` |
| `msdyn_pmview_ProcessSession` | [msdyn_pmview](msdyn_pmview.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmview` |
| `msdyn_qna_ProcessSession` | [msdyn_qna](msdyn_qna.md) | `regardingobjectid` | `regardingobjectid_msdyn_qna` |
| `msdyn_richtextfile_ProcessSession` | [msdyn_richtextfile](msdyn_richtextfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_richtextfile` |
| `msdyn_salesforcestructuredobject_ProcessSession` | [msdyn_salesforcestructuredobject](msdyn_salesforcestructuredobject.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesforcestructuredobject` |
| `msdyn_salesforcestructuredqnaconfig_ProcessSession` | [msdyn_salesforcestructuredqnaconfig](msdyn_salesforcestructuredqnaconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesforcestructuredqnaconfig` |
| `msdyn_schedule_ProcessSession` | [msdyn_schedule](msdyn_schedule.md) | `regardingobjectid` | `regardingobjectid_msdyn_schedule` |
| `msdyn_serviceconfiguration_ProcessSession` | [msdyn_serviceconfiguration](msdyn_serviceconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_serviceconfiguration` |
| `msdyn_slakpi_ProcessSession` | [msdyn_slakpi](msdyn_slakpi.md) | `regardingobjectid` | `regardingobjectid_msdyn_slakpi` |
| `msdyn_solutionhealthrule_ProcessSession` | [msdyn_solutionhealthrule](msdyn_solutionhealthrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthrule` |
| `msdyn_solutionhealthruleargument_ProcessSession` | [msdyn_solutionhealthruleargument](msdyn_solutionhealthruleargument.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthruleargument` |
| `msdyn_solutionhealthruleset_ProcessSession` | [msdyn_solutionhealthruleset](msdyn_solutionhealthruleset.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthruleset` |
| `msdyn_tour_ProcessSession` | [msdyn_tour](msdyn_tour.md) | `regardingobjectid` | `regardingobjectid_msdyn_tour` |
| `msdyn_virtualtablecolumncandidate_ProcessSession` | [msdyn_virtualtablecolumncandidate](msdyn_virtualtablecolumncandidate.md) | `regardingobjectid` | `regardingobjectid_msdyn_virtualtablecolumncandidate` |
| `msdyn_workflowactionstatus_ProcessSession` | [msdyn_workflowactionstatus](msdyn_workflowactionstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_workflowactionstatus` |
| `msdynce_botcontent_ProcessSession` | [msdynce_botcontent](msdynce_botcontent.md) | `regardingobjectid` | `regardingobjectid_msdynce_botcontent` |
| `msgraphresourcetosubscription_ProcessSession` | [msgraphresourcetosubscription](msgraphresourcetosubscription.md) | `regardingobjectid` | `regardingobjectid_msgraphresourcetosubscription` |
| `mspcat_catalogsubmissionfiles_ProcessSession` | [mspcat_catalogsubmissionfiles](mspcat_catalogsubmissionfiles.md) | `regardingobjectid` | `regardingobjectid_mspcat_catalogsubmissionfiles` |
| `mspcat_packagestore_ProcessSession` | [mspcat_packagestore](mspcat_packagestore.md) | `regardingobjectid` | `regardingobjectid_mspcat_packagestore` |
| `NewProcess_ProcessSessions` | [newprocess](newprocess.md) | `regardingobjectid` | `regardingobjectid_newprocess` |
| `organizationdatasyncfnostate_ProcessSession` | [organizationdatasyncfnostate](organizationdatasyncfnostate.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncfnostate` |
| `organizationdatasyncstate_ProcessSession` | [organizationdatasyncstate](organizationdatasyncstate.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncstate` |
| `organizationdatasyncsubscription_ProcessSession` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscription` |
| `organizationdatasyncsubscriptionentity_ProcessSession` | [organizationdatasyncsubscriptionentity](organizationdatasyncsubscriptionentity.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscriptionentity` |
| `organizationdatasyncsubscriptionfnotable_ProcessSession` | [organizationdatasyncsubscriptionfnotable](organizationdatasyncsubscriptionfnotable.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscriptionfnotable` |
| `owner_processsessions` | [owner](owner.md) | `ownerid` | `ownerid` |
| `Owning_businessunit_processsessions` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `package_ProcessSession` | [package](package.md) | `regardingobjectid` | `regardingobjectid_package` |
| `packagehistory_ProcessSession` | [packagehistory](packagehistory.md) | `regardingobjectid` | `regardingobjectid_packagehistory` |
| `PhoneCall_ProcessSessions` | [phonecall](phonecall.md) | `regardingobjectid` | `regardingobjectid_phonecall` |
| `plannerbusinessscenario_ProcessSession` | [plannerbusinessscenario](plannerbusinessscenario.md) | `regardingobjectid` | `regardingobjectid_plannerbusinessscenario` |
| `plannersyncaction_ProcessSession` | [plannersyncaction](plannersyncaction.md) | `regardingobjectid` | `regardingobjectid_plannersyncaction` |
| `plugin_ProcessSession` | [plugin](plugin.md) | `regardingobjectid` | `regardingobjectid_plugin` |
| `position_ProcessSession` | [position](position.md) | `regardingobjectid` | `regardingobjectid_position` |
| `powerbidataset_ProcessSession` | [powerbidataset](powerbidataset.md) | `regardingobjectid` | `regardingobjectid_powerbidataset` |
| `powerbidatasetapdx_ProcessSession` | [powerbidatasetapdx](powerbidatasetapdx.md) | `regardingobjectid` | `regardingobjectid_powerbidatasetapdx` |
| `powerbimashupparameter_ProcessSession` | [powerbimashupparameter](powerbimashupparameter.md) | `regardingobjectid` | `regardingobjectid_powerbimashupparameter` |
| `powerbireport_ProcessSession` | [powerbireport](powerbireport.md) | `regardingobjectid` | `regardingobjectid_powerbireport` |
| `powerbireportapdx_ProcessSession` | [powerbireportapdx](powerbireportapdx.md) | `regardingobjectid` | `regardingobjectid_powerbireportapdx` |
| `powerfxrule_ProcessSession` | [powerfxrule](powerfxrule.md) | `regardingobjectid` | `regardingobjectid_powerfxrule` |
| `powerpagecomponent_ProcessSession` | [powerpagecomponent](powerpagecomponent.md) | `regardingobjectid` | `regardingobjectid_powerpagecomponent` |
| `powerpagesddosalert_ProcessSession` | [powerpagesddosalert](powerpagesddosalert.md) | `regardingobjectid` | `regardingobjectid_powerpagesddosalert` |
| `powerpagesite_ProcessSession` | [powerpagesite](powerpagesite.md) | `regardingobjectid` | `regardingobjectid_powerpagesite` |
| `powerpagesitelanguage_ProcessSession` | [powerpagesitelanguage](powerpagesitelanguage.md) | `regardingobjectid` | `regardingobjectid_powerpagesitelanguage` |
| `powerpagesitepublished_ProcessSession` | [powerpagesitepublished](powerpagesitepublished.md) | `regardingobjectid` | `regardingobjectid_powerpagesitepublished` |
| `powerpagesmanagedidentity_ProcessSession` | [powerpagesmanagedidentity](powerpagesmanagedidentity.md) | `regardingobjectid` | `regardingobjectid_powerpagesmanagedidentity` |
| `powerpagesscanreport_ProcessSession` | [powerpagesscanreport](powerpagesscanreport.md) | `regardingobjectid` | `regardingobjectid_powerpagesscanreport` |
| `powerpagessourcefile_ProcessSession` | [powerpagessourcefile](powerpagessourcefile.md) | `regardingobjectid` | `regardingobjectid_powerpagessourcefile` |
| `privilegecheckerlog_ProcessSession` | [privilegecheckerlog](privilegecheckerlog.md) | `regardingobjectid` | `regardingobjectid_privilegecheckerlog` |
| `privilegecheckerrun_ProcessSession` | [privilegecheckerrun](privilegecheckerrun.md) | `regardingobjectid` | `regardingobjectid_privilegecheckerrun` |
| `privilegesremovalsetting_ProcessSession` | [privilegesremovalsetting](privilegesremovalsetting.md) | `regardingobjectid` | `regardingobjectid_privilegesremovalsetting` |
| `processstageparameter_ProcessSession` | [processstageparameter](processstageparameter.md) | `regardingobjectid` | `regardingobjectid_processstageparameter` |
| `provisionlanguageforuser_ProcessSession` | [provisionlanguageforuser](provisionlanguageforuser.md) | `regardingobjectid` | `regardingobjectid_provisionlanguageforuser` |
| `purviewlabelinfo_ProcessSession` | [purviewlabelinfo](purviewlabelinfo.md) | `regardingobjectid` | `regardingobjectid_purviewlabelinfo` |
| `Queue_ProcessSessions` | [queue](queue.md) | `regardingobjectid` | `regardingobjectid_queue` |
| `QueueItem_ProcessSessions` | [queueitem](queueitem.md) | `regardingobjectid` | `regardingobjectid_queueitem` |
| `recordfilter_ProcessSession` | [recordfilter](recordfilter.md) | `regardingobjectid` | `regardingobjectid_recordfilter` |
| `RecurringAppointmentMaster_ProcessSessions` | [recurringappointmentmaster](recurringappointmentmaster.md) | `regardingobjectid` | `regardingobjectid_recurringappointmentmaster` |
| `recyclebinconfig_ProcessSession` | [recyclebinconfig](recyclebinconfig.md) | `regardingobjectid` | `regardingobjectid_recyclebinconfig` |
| `Report_ProcessSessions` | [report](report.md) | `regardingobjectid` | `regardingobjectid_report` |
| `reportparameter_ProcessSession` | [reportparameter](reportparameter.md) | `regardingobjectid` | `regardingobjectid_reportparameter` |
| `retaineddataexcel_ProcessSession` | [retaineddataexcel](retaineddataexcel.md) | `regardingobjectid` | `regardingobjectid_retaineddataexcel` |
| `retentionconfig_ProcessSession` | [retentionconfig](retentionconfig.md) | `regardingobjectid` | `regardingobjectid_retentionconfig` |
| `retentionfailuredetail_ProcessSession` | [retentionfailuredetail](retentionfailuredetail.md) | `regardingobjectid` | `regardingobjectid_retentionfailuredetail` |
| `retentionoperation_ProcessSession` | [retentionoperation](retentionoperation.md) | `regardingobjectid` | `regardingobjectid_retentionoperation` |
| `retentionoperationdetail_ProcessSession` | [retentionoperationdetail](retentionoperationdetail.md) | `regardingobjectid` | `regardingobjectid_retentionoperationdetail` |
| `retentionsuccessdetail_ProcessSession` | [retentionsuccessdetail](retentionsuccessdetail.md) | `regardingobjectid` | `regardingobjectid_retentionsuccessdetail` |
| `roleeditorlayout_ProcessSession` | [roleeditorlayout](roleeditorlayout.md) | `regardingobjectid` | `regardingobjectid_roleeditorlayout` |
| `rollupfield_ProcessSessions` | [rollupfield](rollupfield.md) | `regardingobjectid` | `regardingobjectid_rollupfield` |
| `sa_suggestedaction_ProcessSession` | [sa_suggestedaction](sa_suggestedaction.md) | `regardingobjectid` | `regardingobjectid_sa_suggestedaction` |
| `sa_suggestedactioncriteria_ProcessSession` | [sa_suggestedactioncriteria](sa_suggestedactioncriteria.md) | `regardingobjectid` | `regardingobjectid_sa_suggestedactioncriteria` |
| `savingrule_ProcessSession` | [savingrule](savingrule.md) | `regardingobjectid` | `regardingobjectid_savingrule` |
| `searchattributesettings_ProcessSession` | [searchattributesettings](searchattributesettings.md) | `regardingobjectid` | `regardingobjectid_searchattributesettings` |
| `searchcustomanalyzer_ProcessSession` | [searchcustomanalyzer](searchcustomanalyzer.md) | `regardingobjectid` | `regardingobjectid_searchcustomanalyzer` |
| `searchrelationshipsettings_ProcessSession` | [searchrelationshipsettings](searchrelationshipsettings.md) | `regardingobjectid` | `regardingobjectid_searchrelationshipsettings` |
| `sensitivitylabelattributemapping_ProcessSession` | [sensitivitylabelattributemapping](sensitivitylabelattributemapping.md) | `regardingobjectid` | `regardingobjectid_sensitivitylabelattributemapping` |
| `serviceplan_ProcessSession` | [serviceplan](serviceplan.md) | `regardingobjectid` | `regardingobjectid_serviceplan` |
| `serviceplanmapping_ProcessSession` | [serviceplanmapping](serviceplanmapping.md) | `regardingobjectid` | `regardingobjectid_serviceplanmapping` |
| `sharedlinksetting_ProcessSession` | [sharedlinksetting](sharedlinksetting.md) | `regardingobjectid` | `regardingobjectid_sharedlinksetting` |
| `sharedobject_ProcessSession` | [sharedobject](sharedobject.md) | `regardingobjectid` | `regardingobjectid_sharedobject` |
| `sharedworkspace_ProcessSession` | [sharedworkspace](sharedworkspace.md) | `regardingobjectid` | `regardingobjectid_sharedworkspace` |
| `sharedworkspacepool_ProcessSession` | [sharedworkspacepool](sharedworkspacepool.md) | `regardingobjectid` | `regardingobjectid_sharedworkspacepool` |
| `SharePointDocumentLocation_ProcessSessions` | [sharepointdocumentlocation](sharepointdocumentlocation.md) | `regardingobjectid` | `regardingobjectid_sharepointdocumentlocation` |
| `sharepointmanagedidentity_ProcessSession` | [sharepointmanagedidentity](sharepointmanagedidentity.md) | `regardingobjectid` | `regardingobjectid_sharepointmanagedidentity` |
| `SharePointSite_ProcessSessions` | [sharepointsite](sharepointsite.md) | `regardingobjectid` | `regardingobjectid_sharepointsite` |
| `sideloadedaiplugin_ProcessSession` | [sideloadedaiplugin](sideloadedaiplugin.md) | `regardingobjectid` | `regardingobjectid_sideloadedaiplugin` |
| `slabase_ProcessSessions` | [sla](sla.md) | `regardingobjectid` | `regardingobjectid_sla` |
| `SocialActivity_ProcessSessions` | [socialactivity](socialactivity.md) | `regardingobjectid` | `regardingobjectid_socialactivity` |
| `SocialProfile_ProcessSessions` | [socialprofile](socialprofile.md) | `regardingobjectid` | `regardingobjectid_socialprofile` |
| `solutioncomponentattributeconfiguration_ProcessSession` | [solutioncomponentattributeconfiguration](solutioncomponentattributeconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentattributeconfiguration` |
| `solutioncomponentbatchconfiguration_ProcessSession` | [solutioncomponentbatchconfiguration](solutioncomponentbatchconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentbatchconfiguration` |
| `solutioncomponentconfiguration_ProcessSession` | [solutioncomponentconfiguration](solutioncomponentconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentconfiguration` |
| `solutioncomponentrelationshipconfiguration_ProcessSession` | [solutioncomponentrelationshipconfiguration](solutioncomponentrelationshipconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentrelationshipconfiguration` |
| `stagedentity_ProcessSession` | [stagedentity](stagedentity.md) | `regardingobjectid` | `regardingobjectid_stagedentity` |
| `stagedentityattribute_ProcessSession` | [stagedentityattribute](stagedentityattribute.md) | `regardingobjectid` | `regardingobjectid_stagedentityattribute` |
| `stagedmetadataasyncoperation_ProcessSession` | [stagedmetadataasyncoperation](stagedmetadataasyncoperation.md) | `regardingobjectid` | `regardingobjectid_stagedmetadataasyncoperation` |
| `stagesolutionupload_ProcessSession` | [stagesolutionupload](stagesolutionupload.md) | `regardingobjectid` | `regardingobjectid_stagesolutionupload` |
| `Subject_ProcessSessions` | [subject](subject.md) | `regardingobjectid` | `regardingobjectid_subject` |
| `supportusertable_ProcessSession` | [supportusertable](supportusertable.md) | `regardingobjectid` | `regardingobjectid_supportusertable` |
| `synapsedatabase_ProcessSession` | [synapsedatabase](synapsedatabase.md) | `regardingobjectid` | `regardingobjectid_synapsedatabase` |
| `synapselinkexternaltablestate_ProcessSession` | [synapselinkexternaltablestate](synapselinkexternaltablestate.md) | `regardingobjectid` | `regardingobjectid_synapselinkexternaltablestate` |
| `synapselinkprofile_ProcessSession` | [synapselinkprofile](synapselinkprofile.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofile` |
| `synapselinkprofileentity_ProcessSession` | [synapselinkprofileentity](synapselinkprofileentity.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofileentity` |
| `synapselinkprofileentitystate_ProcessSession` | [synapselinkprofileentitystate](synapselinkprofileentitystate.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofileentitystate` |
| `synapselinkschedule_ProcessSession` | [synapselinkschedule](synapselinkschedule.md) | `regardingobjectid` | `regardingobjectid_synapselinkschedule` |
| `SystemUser_ProcessSessions` | [systemuser](systemuser.md) | `regardingobjectid` | `regardingobjectid_systemuser` |
| `systemuserauthorizationchangetracker_ProcessSession` | [systemuserauthorizationchangetracker](systemuserauthorizationchangetracker.md) | `regardingobjectid` | `regardingobjectid_systemuserauthorizationchangetracker` |
| `tag_ProcessSession` | [tag](tag.md) | `regardingobjectid` | `regardingobjectid_tag` |
| `taggedflowsession_ProcessSession` | [taggedflowsession](taggedflowsession.md) | `regardingobjectid` | `regardingobjectid_taggedflowsession` |
| `taggedprocess_ProcessSession` | [taggedprocess](taggedprocess.md) | `regardingobjectid` | `regardingobjectid_taggedprocess` |
| `Task_ProcessSessions` | [task](task.md) | `regardingobjectid` | `regardingobjectid_task` |
| `team_processsession` | [team](team.md) | `owningteam` | `owningteam` |
| `Team_ProcessSessions` | [team](team.md) | `regardingobjectid` | `regardingobjectid_team` |
| `teammobileofflineprofilemembership_ProcessSession` | [teammobileofflineprofilemembership](teammobileofflineprofilemembership.md) | `regardingobjectid` | `regardingobjectid_teammobileofflineprofilemembership` |
| `Template_ProcessSessions` | [template](template.md) | `regardingobjectid` | `regardingobjectid_template` |
| `Territory_ProcessSessions` | [territory](territory.md) | `regardingobjectid` | `regardingobjectid_territory` |
| `theme_ProcessSession` | [theme](theme.md) | `regardingobjectid` | `regardingobjectid_theme` |
| `TransactionCurrency_ProcessSessions` | [transactioncurrency](transactioncurrency.md) | `regardingobjectid` | `regardingobjectid_transactioncurrency` |
| `TranslationProcess_ProcessSessions` | [translationprocess](translationprocess.md) | `regardingobjectid` | `regardingobjectid_translationprocess` |
| `unstructuredfilesearchentity_ProcessSession` | [unstructuredfilesearchentity](unstructuredfilesearchentity.md) | `regardingobjectid` | `regardingobjectid_unstructuredfilesearchentity` |
| `unstructuredfilesearchrecord_ProcessSession` | [unstructuredfilesearchrecord](unstructuredfilesearchrecord.md) | `regardingobjectid` | `regardingobjectid_unstructuredfilesearchrecord` |
| `usermapping_ProcessSession` | [usermapping](usermapping.md) | `regardingobjectid` | `regardingobjectid_usermapping` |
| `usermobileofflineprofilemembership_ProcessSession` | [usermobileofflineprofilemembership](usermobileofflineprofilemembership.md) | `regardingobjectid` | `regardingobjectid_usermobileofflineprofilemembership` |
| `userrating_ProcessSession` | [userrating](userrating.md) | `regardingobjectid` | `regardingobjectid_userrating` |
| `viewasexamplequestion_ProcessSession` | [viewasexamplequestion](viewasexamplequestion.md) | `regardingobjectid` | `regardingobjectid_viewasexamplequestion` |
| `virtualentitymetadata_ProcessSession` | [virtualentitymetadata](virtualentitymetadata.md) | `regardingobjectid` | `regardingobjectid_virtualentitymetadata` |
| `workflowbinary_ProcessSession` | [workflowbinary](workflowbinary.md) | `regardingobjectid` | `regardingobjectid_workflowbinary` |
| `workflowmetadata_ProcessSession` | [workflowmetadata](workflowmetadata.md) | `regardingobjectid` | `regardingobjectid_workflowmetadata` |
| `workqueue_ProcessSession` | [workqueue](workqueue.md) | `regardingobjectid` | `regardingobjectid_workqueue` |
| `workqueueitem_ProcessSession` | [workqueueitem](workqueueitem.md) | `regardingobjectid` | `regardingobjectid_workqueueitem` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_processsession_nextlinkedsessionid` | _n/a_ | `nextlinkedsessionid` | _n/a_ |
| `lk_processsession_originatingsessionid` | _n/a_ | `originatingsessionid` | _n/a_ |
| `lk_processsession_previouslinkedsessionid` | _n/a_ | `previouslinkedsessionid` | _n/a_ |
| `lk_workflowlog_processsession` | _n/a_ | `asyncoperationid` | _n/a_ |
| `lk_workflowlog_processsession_childworkflow` | _n/a_ | `childworkflowinstanceid` | _n/a_ |
| `processsession_connections1` | _n/a_ | `record1id` | _n/a_ |
| `processsession_connections2` | _n/a_ | `record2id` | _n/a_ |
| `processsession_PostFollows` | _n/a_ | `regardingobjectid` | _n/a_ |
| `processsession_PostRegardings` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ProcessSession_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [processsession.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/processsession.md) on 2026-05-06.