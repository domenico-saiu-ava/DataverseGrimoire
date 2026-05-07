---
logical: "mailboxtrackingfolder"
display: "Mailbox Auto Tracking Folder"
entitySetName: "mailboxtrackingfolders"
primaryId: "mailboxtrackingfolderid"
tableType: "Standard"
ownership: "UserOwned"
---

# Mailbox Auto Tracking Folder

Stores data about what folders for a mailbox are auto tracked

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mailboxtrackingfolder` |
| Display name | Mailbox Auto Tracking Folder |
| Display (plural) | Mailbox Auto Tracking Folders |
| Schema name | `MailboxTrackingFolder` |
| Entity set (Web API) | `mailboxtrackingfolders` |
| Primary id attribute | `mailboxtrackingfolderid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/mailboxtrackingfolders?$select=&$top=10
GET /api/data/v9.2/mailboxtrackingfolders(<guid>)
POST /api/data/v9.2/mailboxtrackingfolders
PATCH /api/data/v9.2/mailboxtrackingfolders(<guid>)
DELETE /api/data/v9.2/mailboxtrackingfolders(<guid>)
```

## Attributes

Writable: **8** · Read-only: **12**

### Writable

`ExchangeFolderId`, `ExchangeFolderName`, `FolderOnboardingStatus`, `MailboxId`, `OwnerId`, `OwnerIdType`, `RegardingObjectId`, `RegardingObjectTypeCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `MailboxTrackingFolderId`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (319)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Account_MailboxTrackingFolder` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account` |
| `activityfileattachment_MailboxTrackingFolders` | [activityfileattachment](activityfileattachment.md) | `regardingobjectid` | `regardingobjectid_activityfileattachment` |
| `adx_externalidentity_MailboxTrackingFolders` | [adx_externalidentity](adx_externalidentity.md) | `regardingobjectid` | `regardingobjectid_adx_externalidentity` |
| `adx_invitation_MailboxTrackingFolders` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation` |
| `adx_inviteredemption_MailboxTrackingFolders` | [adx_inviteredemption](adx_inviteredemption.md) | `regardingobjectid` | `regardingobjectid_adx_inviteredemption` |
| `adx_portalcomment_MailboxTrackingFolders` | [adx_portalcomment](adx_portalcomment.md) | `regardingobjectid` | `regardingobjectid_adx_portalcomment` |
| `adx_setting_MailboxTrackingFolders` | [adx_setting](adx_setting.md) | `regardingobjectid` | `regardingobjectid_adx_setting` |
| `adx_webformsession_MailboxTrackingFolders` | [adx_webformsession](adx_webformsession.md) | `regardingobjectid` | `regardingobjectid_adx_webformsession` |
| `aicopilot_MailboxTrackingFolders` | [aicopilot](aicopilot.md) | `regardingobjectid` | `regardingobjectid_aicopilot` |
| `aiplugin_MailboxTrackingFolders` | [aiplugin](aiplugin.md) | `regardingobjectid` | `regardingobjectid_aiplugin` |
| `aipluginauth_MailboxTrackingFolders` | [aipluginauth](aipluginauth.md) | `regardingobjectid` | `regardingobjectid_aipluginauth` |
| `aipluginconversationstarter_MailboxTrackingFolders` | [aipluginconversationstarter](aipluginconversationstarter.md) | `regardingobjectid` | `regardingobjectid_aipluginconversationstarter` |
| `aipluginconversationstartermapping_MailboxTrackingFolders` | [aipluginconversationstartermapping](aipluginconversationstartermapping.md) | `regardingobjectid` | `regardingobjectid_aipluginconversationstartermapping` |
| `aipluginexternalschema_MailboxTrackingFolders` | [aipluginexternalschema](aipluginexternalschema.md) | `regardingobjectid` | `regardingobjectid_aipluginexternalschema` |
| `aipluginexternalschemaproperty_MailboxTrackingFolders` | [aipluginexternalschemaproperty](aipluginexternalschemaproperty.md) | `regardingobjectid` | `regardingobjectid_aipluginexternalschemaproperty` |
| `aiplugingovernance_MailboxTrackingFolders` | [aiplugingovernance](aiplugingovernance.md) | `regardingobjectid` | `regardingobjectid_aiplugingovernance` |
| `aiplugingovernanceext_MailboxTrackingFolders` | [aiplugingovernanceext](aiplugingovernanceext.md) | `regardingobjectid` | `regardingobjectid_aiplugingovernanceext` |
| `aiplugininstance_MailboxTrackingFolders` | [aiplugininstance](aiplugininstance.md) | `regardingobjectid` | `regardingobjectid_aiplugininstance` |
| `aipluginoperation_MailboxTrackingFolders` | [aipluginoperation](aipluginoperation.md) | `regardingobjectid` | `regardingobjectid_aipluginoperation` |
| `aipluginoperationparameter_MailboxTrackingFolders` | [aipluginoperationparameter](aipluginoperationparameter.md) | `regardingobjectid` | `regardingobjectid_aipluginoperationparameter` |
| `aipluginoperationresponsetemplate_MailboxTrackingFolders` | [aipluginoperationresponsetemplate](aipluginoperationresponsetemplate.md) | `regardingobjectid` | `regardingobjectid_aipluginoperationresponsetemplate` |
| `aiplugintitle_MailboxTrackingFolders` | [aiplugintitle](aiplugintitle.md) | `regardingobjectid` | `regardingobjectid_aiplugintitle` |
| `aipluginusersetting_MailboxTrackingFolders` | [aipluginusersetting](aipluginusersetting.md) | `regardingobjectid` | `regardingobjectid_aipluginusersetting` |
| `allowedmcpclient_MailboxTrackingFolders` | [allowedmcpclient](allowedmcpclient.md) | `regardingobjectid` | `regardingobjectid_allowedmcpclient` |
| `appaction_MailboxTrackingFolders` | [appaction](appaction.md) | `regardingobjectid` | `regardingobjectid_appaction` |
| `appactionmigration_MailboxTrackingFolders` | [appactionmigration](appactionmigration.md) | `regardingobjectid` | `regardingobjectid_appactionmigration` |
| `appactionrule_MailboxTrackingFolders` | [appactionrule](appactionrule.md) | `regardingobjectid` | `regardingobjectid_appactionrule` |
| `application_MailboxTrackingFolders` | [application](application.md) | `regardingobjectid` | `regardingobjectid_application` |
| `applicationuser_MailboxTrackingFolders` | [applicationuser](applicationuser.md) | `regardingobjectid` | `regardingobjectid_applicationuser` |
| `approvalprocess_MailboxTrackingFolders` | [approvalprocess](approvalprocess.md) | `regardingobjectid` | `regardingobjectid_approvalprocess` |
| `approvalstageapproval_MailboxTrackingFolders` | [approvalstageapproval](approvalstageapproval.md) | `regardingobjectid` | `regardingobjectid_approvalstageapproval` |
| `approvalstagecondition_MailboxTrackingFolders` | [approvalstagecondition](approvalstagecondition.md) | `regardingobjectid` | `regardingobjectid_approvalstagecondition` |
| `approvalstageintelligent_MailboxTrackingFolders` | [approvalstageintelligent](approvalstageintelligent.md) | `regardingobjectid` | `regardingobjectid_approvalstageintelligent` |
| `approvalstageorder_MailboxTrackingFolders` | [approvalstageorder](approvalstageorder.md) | `regardingobjectid` | `regardingobjectid_approvalstageorder` |
| `AsyncOperation_MailboxTrackingFolder` | [asyncoperation](asyncoperation.md) | `regardingobjectid` | `regardingobjectid_asyncoperation` |
| `attributeclusterconfig_MailboxTrackingFolders` | [attributeclusterconfig](attributeclusterconfig.md) | `regardingobjectid` | `regardingobjectid_attributeclusterconfig` |
| `attributeimageconfig_MailboxTrackingFolders` | [attributeimageconfig](attributeimageconfig.md) | `regardingobjectid` | `regardingobjectid_attributeimageconfig` |
| `attributemaskingrule_MailboxTrackingFolders` | [attributemaskingrule](attributemaskingrule.md) | `regardingobjectid` | `regardingobjectid_attributemaskingrule` |
| `attributepicklistvalue_MailboxTrackingFolders` | [attributepicklistvalue](attributepicklistvalue.md) | `regardingobjectid` | `regardingobjectid_attributepicklistvalue` |
| `bot_MailboxTrackingFolders` | [bot](bot.md) | `regardingobjectid` | `regardingobjectid_bot` |
| `botcomponent_MailboxTrackingFolders` | [botcomponent](botcomponent.md) | `regardingobjectid` | `regardingobjectid_botcomponent` |
| `botcomponentcollection_MailboxTrackingFolders` | [botcomponentcollection](botcomponentcollection.md) | `regardingobjectid` | `regardingobjectid_botcomponentcollection` |
| `businessprocess_MailboxTrackingFolders` | [businessprocess](businessprocess.md) | `regardingobjectid` | `regardingobjectid_businessprocess` |
| `businessunit_mailboxtrackingfolder` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `card_MailboxTrackingFolders` | [card](card.md) | `regardingobjectid` | `regardingobjectid_card` |
| `catalog_MailboxTrackingFolders` | [catalog](catalog.md) | `regardingobjectid` | `regardingobjectid_catalog` |
| `catalogassignment_MailboxTrackingFolders` | [catalogassignment](catalogassignment.md) | `regardingobjectid` | `regardingobjectid_catalogassignment` |
| `certificatecredential_MailboxTrackingFolders` | [certificatecredential](certificatecredential.md) | `regardingobjectid` | `regardingobjectid_certificatecredential` |
| `chat_MailboxTrackingFolders` | [chat](chat.md) | `regardingobjectid` | `regardingobjectid_chat` |
| `connectioninstance_MailboxTrackingFolders` | [connectioninstance](connectioninstance.md) | `regardingobjectid` | `regardingobjectid_connectioninstance` |
| `connectionreference_MailboxTrackingFolders` | [connectionreference](connectionreference.md) | `regardingobjectid` | `regardingobjectid_connectionreference` |
| `connector_MailboxTrackingFolders` | [connector](connector.md) | `regardingobjectid` | `regardingobjectid_connector` |
| `Contact_MailboxTrackingFolder` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact` |
| `conversationtranscript_MailboxTrackingFolders` | [conversationtranscript](conversationtranscript.md) | `regardingobjectid` | `regardingobjectid_conversationtranscript` |
| `copilotexamplequestion_MailboxTrackingFolders` | [copilotexamplequestion](copilotexamplequestion.md) | `regardingobjectid` | `regardingobjectid_copilotexamplequestion` |
| `copilotglossaryterm_MailboxTrackingFolders` | [copilotglossaryterm](copilotglossaryterm.md) | `regardingobjectid` | `regardingobjectid_copilotglossaryterm` |
| `copilotsynonyms_MailboxTrackingFolders` | [copilotsynonyms](copilotsynonyms.md) | `regardingobjectid` | `regardingobjectid_copilotsynonyms` |
| `credential_MailboxTrackingFolders` | [credential](credential.md) | `regardingobjectid` | `regardingobjectid_credential` |
| `customapi_MailboxTrackingFolders` | [customapi](customapi.md) | `regardingobjectid` | `regardingobjectid_customapi` |
| `customapirequestparameter_MailboxTrackingFolders` | [customapirequestparameter](customapirequestparameter.md) | `regardingobjectid` | `regardingobjectid_customapirequestparameter` |
| `customapiresponseproperty_MailboxTrackingFolders` | [customapiresponseproperty](customapiresponseproperty.md) | `regardingobjectid` | `regardingobjectid_customapiresponseproperty` |
| `datalakefolder_MailboxTrackingFolders` | [datalakefolder](datalakefolder.md) | `regardingobjectid` | `regardingobjectid_datalakefolder` |
| `datalakefolderpermission_MailboxTrackingFolders` | [datalakefolderpermission](datalakefolderpermission.md) | `regardingobjectid` | `regardingobjectid_datalakefolderpermission` |
| `datalakeworkspace_MailboxTrackingFolders` | [datalakeworkspace](datalakeworkspace.md) | `regardingobjectid` | `regardingobjectid_datalakeworkspace` |
| `datalakeworkspacepermission_MailboxTrackingFolders` | [datalakeworkspacepermission](datalakeworkspacepermission.md) | `regardingobjectid` | `regardingobjectid_datalakeworkspacepermission` |
| `dataprocessingconfiguration_MailboxTrackingFolders` | [dataprocessingconfiguration](dataprocessingconfiguration.md) | `regardingobjectid` | `regardingobjectid_dataprocessingconfiguration` |
| `delegatedauthorization_MailboxTrackingFolders` | [delegatedauthorization](delegatedauthorization.md) | `regardingobjectid` | `regardingobjectid_delegatedauthorization` |
| `desktopflowbinary_MailboxTrackingFolders` | [desktopflowbinary](desktopflowbinary.md) | `regardingobjectid` | `regardingobjectid_desktopflowbinary` |
| `desktopflowmodule_MailboxTrackingFolders` | [desktopflowmodule](desktopflowmodule.md) | `regardingobjectid` | `regardingobjectid_desktopflowmodule` |
| `dvfilesearch_MailboxTrackingFolders` | [dvfilesearch](dvfilesearch.md) | `regardingobjectid` | `regardingobjectid_dvfilesearch` |
| `dvfilesearchattribute_MailboxTrackingFolders` | [dvfilesearchattribute](dvfilesearchattribute.md) | `regardingobjectid` | `regardingobjectid_dvfilesearchattribute` |
| `dvfilesearchentity_MailboxTrackingFolders` | [dvfilesearchentity](dvfilesearchentity.md) | `regardingobjectid` | `regardingobjectid_dvfilesearchentity` |
| `dvtablesearch_MailboxTrackingFolders` | [dvtablesearch](dvtablesearch.md) | `regardingobjectid` | `regardingobjectid_dvtablesearch` |
| `dvtablesearchattribute_MailboxTrackingFolders` | [dvtablesearchattribute](dvtablesearchattribute.md) | `regardingobjectid` | `regardingobjectid_dvtablesearchattribute` |
| `dvtablesearchentity_MailboxTrackingFolders` | [dvtablesearchentity](dvtablesearchentity.md) | `regardingobjectid` | `regardingobjectid_dvtablesearchentity` |
| `emailaddressconfiguration_MailboxTrackingFolders` | [emailaddressconfiguration](emailaddressconfiguration.md) | `regardingobjectid` | `regardingobjectid_emailaddressconfiguration` |
| `entityanalyticsconfig_MailboxTrackingFolders` | [entityanalyticsconfig](entityanalyticsconfig.md) | `regardingobjectid` | `regardingobjectid_entityanalyticsconfig` |
| `entityclusterconfig_MailboxTrackingFolders` | [entityclusterconfig](entityclusterconfig.md) | `regardingobjectid` | `regardingobjectid_entityclusterconfig` |
| `entityimageconfig_MailboxTrackingFolders` | [entityimageconfig](entityimageconfig.md) | `regardingobjectid` | `regardingobjectid_entityimageconfig` |
| `entityindex_MailboxTrackingFolders` | [entityindex](entityindex.md) | `regardingobjectid` | `regardingobjectid_entityindex` |
| `entityrecordfilter_MailboxTrackingFolders` | [entityrecordfilter](entityrecordfilter.md) | `regardingobjectid` | `regardingobjectid_entityrecordfilter` |
| `environmentvariabledefinition_MailboxTrackingFolders` | [environmentvariabledefinition](environmentvariabledefinition.md) | `regardingobjectid` | `regardingobjectid_environmentvariabledefinition` |
| `environmentvariablevalue_MailboxTrackingFolders` | [environmentvariablevalue](environmentvariablevalue.md) | `regardingobjectid` | `regardingobjectid_environmentvariablevalue` |
| `exportedexcel_MailboxTrackingFolders` | [exportedexcel](exportedexcel.md) | `regardingobjectid` | `regardingobjectid_exportedexcel` |
| `exportsolutionupload_MailboxTrackingFolders` | [exportsolutionupload](exportsolutionupload.md) | `regardingobjectid` | `regardingobjectid_exportsolutionupload` |
| `fabricaiskill_MailboxTrackingFolders` | [fabricaiskill](fabricaiskill.md) | `regardingobjectid` | `regardingobjectid_fabricaiskill` |
| `featurecontrolsetting_MailboxTrackingFolders` | [featurecontrolsetting](featurecontrolsetting.md) | `regardingobjectid` | `regardingobjectid_featurecontrolsetting` |
| `federatedknowledgeconfiguration_MailboxTrackingFolders` | [federatedknowledgeconfiguration](federatedknowledgeconfiguration.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgeconfiguration` |
| `federatedknowledgeentityconfiguration_MailboxTrackingFolders` | [federatedknowledgeentityconfiguration](federatedknowledgeentityconfiguration.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgeentityconfiguration` |
| `flowcapacityassignment_MailboxTrackingFolders` | [flowcapacityassignment](flowcapacityassignment.md) | `regardingobjectid` | `regardingobjectid_flowcapacityassignment` |
| `flowcredentialapplication_MailboxTrackingFolders` | [flowcredentialapplication](flowcredentialapplication.md) | `regardingobjectid` | `regardingobjectid_flowcredentialapplication` |
| `flowevent_MailboxTrackingFolders` | [flowevent](flowevent.md) | `regardingobjectid` | `regardingobjectid_flowevent` |
| `flowmachine_MailboxTrackingFolders` | [flowmachine](flowmachine.md) | `regardingobjectid` | `regardingobjectid_flowmachine` |
| `flowmachinegroup_MailboxTrackingFolders` | [flowmachinegroup](flowmachinegroup.md) | `regardingobjectid` | `regardingobjectid_flowmachinegroup` |
| `flowmachineimage_MailboxTrackingFolders` | [flowmachineimage](flowmachineimage.md) | `regardingobjectid` | `regardingobjectid_flowmachineimage` |
| `flowmachineimageversion_MailboxTrackingFolders` | [flowmachineimageversion](flowmachineimageversion.md) | `regardingobjectid` | `regardingobjectid_flowmachineimageversion` |
| `flowmachinenetwork_MailboxTrackingFolders` | [flowmachinenetwork](flowmachinenetwork.md) | `regardingobjectid` | `regardingobjectid_flowmachinenetwork` |
| `flowsession_MailboxTrackingFolders` | [flowsession](flowsession.md) | `regardingobjectid` | `regardingobjectid_flowsession` |
| `flowsessionbinary_MailboxTrackingFolders` | [flowsessionbinary](flowsessionbinary.md) | `regardingobjectid` | `regardingobjectid_flowsessionbinary` |
| `fxexpression_MailboxTrackingFolders` | [fxexpression](fxexpression.md) | `regardingobjectid` | `regardingobjectid_fxexpression` |
| `governanceconfiguration_MailboxTrackingFolders` | [governanceconfiguration](governanceconfiguration.md) | `regardingobjectid` | `regardingobjectid_governanceconfiguration` |
| `indexattributes_MailboxTrackingFolders` | [indexattributes](indexattributes.md) | `regardingobjectid` | `regardingobjectid_indexattributes` |
| `keyvaultreference_MailboxTrackingFolders` | [keyvaultreference](keyvaultreference.md) | `regardingobjectid` | `regardingobjectid_keyvaultreference` |
| `knowledgefaq_MailboxTrackingFolders` | [knowledgefaq](knowledgefaq.md) | `regardingobjectid` | `regardingobjectid_knowledgefaq` |
| `lk_mailboxtrackingfolder_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_mailboxtrackingfolder_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_mailboxtrackingfolder_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_mailboxtrackingfolder_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `Mailbox_MailboxTrackingFolder` | [mailbox](mailbox.md) | `mailboxid` | `mailboxid` |
| `mainfewshot_MailboxTrackingFolders` | [mainfewshot](mainfewshot.md) | `regardingobjectid` | `regardingobjectid_mainfewshot` |
| `makerfewshot_MailboxTrackingFolders` | [makerfewshot](makerfewshot.md) | `regardingobjectid` | `regardingobjectid_makerfewshot` |
| `managedidentity_MailboxTrackingFolders` | [managedidentity](managedidentity.md) | `regardingobjectid` | `regardingobjectid_managedidentity` |
| `maskingrule_MailboxTrackingFolders` | [maskingrule](maskingrule.md) | `regardingobjectid` | `regardingobjectid_maskingrule` |
| `mcpserver_MailboxTrackingFolders` | [mcpserver](mcpserver.md) | `regardingobjectid` | `regardingobjectid_mcpserver` |
| `mcptool_MailboxTrackingFolders` | [mcptool](mcptool.md) | `regardingobjectid` | `regardingobjectid_mcptool` |
| `metadataforarchival_MailboxTrackingFolders` | [metadataforarchival](metadataforarchival.md) | `regardingobjectid` | `regardingobjectid_metadataforarchival` |
| `mobileofflineprofileextension_MailboxTrackingFolders` | [mobileofflineprofileextension](mobileofflineprofileextension.md) | `regardingobjectid` | `regardingobjectid_mobileofflineprofileextension` |
| `msdyn_aibdataset_MailboxTrackingFolders` | [msdyn_aibdataset](msdyn_aibdataset.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdataset` |
| `msdyn_aibdatasetfile_MailboxTrackingFolders` | [msdyn_aibdatasetfile](msdyn_aibdatasetfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetfile` |
| `msdyn_aibdatasetrecord_MailboxTrackingFolders` | [msdyn_aibdatasetrecord](msdyn_aibdatasetrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetrecord` |
| `msdyn_aibdatasetscontainer_MailboxTrackingFolders` | [msdyn_aibdatasetscontainer](msdyn_aibdatasetscontainer.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetscontainer` |
| `msdyn_aibfeedbackloop_MailboxTrackingFolders` | [msdyn_aibfeedbackloop](msdyn_aibfeedbackloop.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfeedbackloop` |
| `msdyn_aibfile_MailboxTrackingFolders` | [msdyn_aibfile](msdyn_aibfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfile` |
| `msdyn_aibfileattacheddata_MailboxTrackingFolders` | [msdyn_aibfileattacheddata](msdyn_aibfileattacheddata.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfileattacheddata` |
| `msdyn_aiconfiguration_MailboxTrackingFolders` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiconfiguration` |
| `msdyn_aidataprocessingevent_MailboxTrackingFolders` | [msdyn_aidataprocessingevent](msdyn_aidataprocessingevent.md) | `regardingobjectid` | `regardingobjectid_msdyn_aidataprocessingevent` |
| `msdyn_aidocumenttemplate_MailboxTrackingFolders` | [msdyn_aidocumenttemplate](msdyn_aidocumenttemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_aidocumenttemplate` |
| `msdyn_aievaluationconfiguration_MailboxTrackingFolders` | [msdyn_aievaluationconfiguration](msdyn_aievaluationconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievaluationconfiguration` |
| `msdyn_aievaluationrun_MailboxTrackingFolders` | [msdyn_aievaluationrun](msdyn_aievaluationrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievaluationrun` |
| `msdyn_aievent_MailboxTrackingFolders` | [msdyn_aievent](msdyn_aievent.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievent` |
| `msdyn_aifptrainingdocument_MailboxTrackingFolders` | [msdyn_aifptrainingdocument](msdyn_aifptrainingdocument.md) | `regardingobjectid` | `regardingobjectid_msdyn_aifptrainingdocument` |
| `msdyn_aimodel_MailboxTrackingFolders` | [msdyn_aimodel](msdyn_aimodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_aimodel` |
| `msdyn_aiodimage_MailboxTrackingFolders` | [msdyn_aiodimage](msdyn_aiodimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodimage` |
| `msdyn_aiodlabel_MailboxTrackingFolders` | [msdyn_aiodlabel](msdyn_aiodlabel.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodlabel` |
| `msdyn_aiodtrainingboundingbox_MailboxTrackingFolders` | [msdyn_aiodtrainingboundingbox](msdyn_aiodtrainingboundingbox.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodtrainingboundingbox` |
| `msdyn_aiodtrainingimage_MailboxTrackingFolders` | [msdyn_aiodtrainingimage](msdyn_aiodtrainingimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodtrainingimage` |
| `msdyn_aitemplate_MailboxTrackingFolders` | [msdyn_aitemplate](msdyn_aitemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitemplate` |
| `msdyn_aitestcase_MailboxTrackingFolders` | [msdyn_aitestcase](msdyn_aitestcase.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcase` |
| `msdyn_aitestcasedocument_MailboxTrackingFolders` | [msdyn_aitestcasedocument](msdyn_aitestcasedocument.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcasedocument` |
| `msdyn_aitestcaseinput_MailboxTrackingFolders` | [msdyn_aitestcaseinput](msdyn_aitestcaseinput.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcaseinput` |
| `msdyn_aitestrun_MailboxTrackingFolders` | [msdyn_aitestrun](msdyn_aitestrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestrun` |
| `msdyn_aitestrunbatch_MailboxTrackingFolders` | [msdyn_aitestrunbatch](msdyn_aitestrunbatch.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestrunbatch` |
| `msdyn_analysiscomponent_MailboxTrackingFolders` | [msdyn_analysiscomponent](msdyn_analysiscomponent.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysiscomponent` |
| `msdyn_analysisjob_MailboxTrackingFolders` | [msdyn_analysisjob](msdyn_analysisjob.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisjob` |
| `msdyn_analysisoverride_MailboxTrackingFolders` | [msdyn_analysisoverride](msdyn_analysisoverride.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisoverride` |
| `msdyn_analysisresult_MailboxTrackingFolders` | [msdyn_analysisresult](msdyn_analysisresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisresult` |
| `msdyn_analysisresultdetail_MailboxTrackingFolders` | [msdyn_analysisresultdetail](msdyn_analysisresultdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisresultdetail` |
| `msdyn_appinsightsmetadata_MailboxTrackingFolders` | [msdyn_appinsightsmetadata](msdyn_appinsightsmetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_appinsightsmetadata` |
| `msdyn_copilotinteractions_MailboxTrackingFolders` | [msdyn_copilotinteractions](msdyn_copilotinteractions.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotinteractions` |
| `msdyn_customcontrolextendedsettings_MailboxTrackingFolders` | [msdyn_customcontrolextendedsettings](msdyn_customcontrolextendedsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_customcontrolextendedsettings` |
| `msdyn_dataflow_datalakefolder_MailboxTrackingFolders` | [msdyn_dataflow_datalakefolder](msdyn_dataflow_datalakefolder.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflow_datalakefolder` |
| `msdyn_dataflow_MailboxTrackingFolders` | [msdyn_dataflow](msdyn_dataflow.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflow` |
| `msdyn_dataflowconnectionreference_MailboxTrackingFolders` | [msdyn_dataflowconnectionreference](msdyn_dataflowconnectionreference.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowconnectionreference` |
| `msdyn_dataflowrefreshhistory_MailboxTrackingFolders` | [msdyn_dataflowrefreshhistory](msdyn_dataflowrefreshhistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowrefreshhistory` |
| `msdyn_dataflowtemplate_MailboxTrackingFolders` | [msdyn_dataflowtemplate](msdyn_dataflowtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowtemplate` |
| `msdyn_dmsrequest_MailboxTrackingFolders` | [msdyn_dmsrequest](msdyn_dmsrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmsrequest` |
| `msdyn_dmsrequeststatus_MailboxTrackingFolders` | [msdyn_dmsrequeststatus](msdyn_dmsrequeststatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmsrequeststatus` |
| `msdyn_dmssyncrequest_MailboxTrackingFolders` | [msdyn_dmssyncrequest](msdyn_dmssyncrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmssyncrequest` |
| `msdyn_dmssyncstatus_MailboxTrackingFolders` | [msdyn_dmssyncstatus](msdyn_dmssyncstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmssyncstatus` |
| `msdyn_entitylinkchatconfiguration_MailboxTrackingFolders` | [msdyn_entitylinkchatconfiguration](msdyn_entitylinkchatconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_entitylinkchatconfiguration` |
| `msdyn_entityrefreshhistory_MailboxTrackingFolders` | [msdyn_entityrefreshhistory](msdyn_entityrefreshhistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityrefreshhistory` |
| `msdyn_favoriteknowledgearticle_MailboxTrackingFolders` | [msdyn_favoriteknowledgearticle](msdyn_favoriteknowledgearticle.md) | `regardingobjectid` | `regardingobjectid_msdyn_favoriteknowledgearticle` |
| `msdyn_federatedarticle_MailboxTrackingFolders` | [msdyn_federatedarticle](msdyn_federatedarticle.md) | `regardingobjectid` | `regardingobjectid_msdyn_federatedarticle` |
| `msdyn_federatedarticleincident_MailboxTrackingFolders` | [msdyn_federatedarticleincident](msdyn_federatedarticleincident.md) | `regardingobjectid` | `regardingobjectid_msdyn_federatedarticleincident` |
| `msdyn_fileupload_MailboxTrackingFolders` | [msdyn_fileupload](msdyn_fileupload.md) | `regardingobjectid` | `regardingobjectid_msdyn_fileupload` |
| `msdyn_flow_actionapprovalmodel_MailboxTrackingFolders` | [msdyn_flow_actionapprovalmodel](msdyn_flow_actionapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_actionapprovalmodel` |
| `msdyn_flow_approval_MailboxTrackingFolders` | [msdyn_flow_approval](msdyn_flow_approval.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approval` |
| `msdyn_flow_approvalrequest_MailboxTrackingFolders` | [msdyn_flow_approvalrequest](msdyn_flow_approvalrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalrequest` |
| `msdyn_flow_approvalresponse_MailboxTrackingFolders` | [msdyn_flow_approvalresponse](msdyn_flow_approvalresponse.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalresponse` |
| `msdyn_flow_approvalstep_MailboxTrackingFolders` | [msdyn_flow_approvalstep](msdyn_flow_approvalstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalstep` |
| `msdyn_flow_awaitallactionapprovalmodel_MailboxTrackingFolders` | [msdyn_flow_awaitallactionapprovalmodel](msdyn_flow_awaitallactionapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_awaitallactionapprovalmodel` |
| `msdyn_flow_awaitallapprovalmodel_MailboxTrackingFolders` | [msdyn_flow_awaitallapprovalmodel](msdyn_flow_awaitallapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_awaitallapprovalmodel` |
| `msdyn_flow_basicapprovalmodel_MailboxTrackingFolders` | [msdyn_flow_basicapprovalmodel](msdyn_flow_basicapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_basicapprovalmodel` |
| `msdyn_flow_flowapproval_MailboxTrackingFolders` | [msdyn_flow_flowapproval](msdyn_flow_flowapproval.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_flowapproval` |
| `msdyn_formmapping_MailboxTrackingFolders` | [msdyn_formmapping](msdyn_formmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_formmapping` |
| `msdyn_function_MailboxTrackingFolders` | [msdyn_function](msdyn_function.md) | `regardingobjectid` | `regardingobjectid_msdyn_function` |
| `msdyn_helppage_MailboxTrackingFolders` | [msdyn_helppage](msdyn_helppage.md) | `regardingobjectid` | `regardingobjectid_msdyn_helppage` |
| `msdyn_historicalcaseharvestbatch_MailboxTrackingFolders` | [msdyn_historicalcaseharvestbatch](msdyn_historicalcaseharvestbatch.md) | `regardingobjectid` | `regardingobjectid_msdyn_historicalcaseharvestbatch` |
| `msdyn_historicalcaseharvestrun_MailboxTrackingFolders` | [msdyn_historicalcaseharvestrun](msdyn_historicalcaseharvestrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_historicalcaseharvestrun` |
| `msdyn_insightsstorevirtualentity_MailboxTrackingFolders` | [msdyn_insightsstorevirtualentity](msdyn_insightsstorevirtualentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_insightsstorevirtualentity` |
| `msdyn_integratedsearchprovider_MailboxTrackingFolders` | [msdyn_integratedsearchprovider](msdyn_integratedsearchprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_integratedsearchprovider` |
| `msdyn_kalanguagesetting_MailboxTrackingFolders` | [msdyn_kalanguagesetting](msdyn_kalanguagesetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_kalanguagesetting` |
| `msdyn_kbattachment_MailboxTrackingFolders` | [msdyn_kbattachment](msdyn_kbattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_kbattachment` |
| `msdyn_kmfederatedsearchconfig_MailboxTrackingFolders` | [msdyn_kmfederatedsearchconfig](msdyn_kmfederatedsearchconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_kmfederatedsearchconfig` |
| `msdyn_kmpersonalizationsetting_MailboxTrackingFolders` | [msdyn_kmpersonalizationsetting](msdyn_kmpersonalizationsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_kmpersonalizationsetting` |
| `msdyn_knowledgearticleimage_MailboxTrackingFolders` | [msdyn_knowledgearticleimage](msdyn_knowledgearticleimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticleimage` |
| `msdyn_knowledgearticletemplate_MailboxTrackingFolders` | [msdyn_knowledgearticletemplate](msdyn_knowledgearticletemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticletemplate` |
| `msdyn_knowledgeassetconfiguration_MailboxTrackingFolders` | [msdyn_knowledgeassetconfiguration](msdyn_knowledgeassetconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeassetconfiguration` |
| `msdyn_knowledgeconfiguration_MailboxTrackingFolders` | [msdyn_knowledgeconfiguration](msdyn_knowledgeconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeconfiguration` |
| `msdyn_knowledgeharvestjobrecord_MailboxTrackingFolders` | [msdyn_knowledgeharvestjobrecord](msdyn_knowledgeharvestjobrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeharvestjobrecord` |
| `msdyn_knowledgeinteractioninsight_MailboxTrackingFolders` | [msdyn_knowledgeinteractioninsight](msdyn_knowledgeinteractioninsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeinteractioninsight` |
| `msdyn_knowledgemanagementsetting_MailboxTrackingFolders` | [msdyn_knowledgemanagementsetting](msdyn_knowledgemanagementsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgemanagementsetting` |
| `msdyn_knowledgepersonalfilter_MailboxTrackingFolders` | [msdyn_knowledgepersonalfilter](msdyn_knowledgepersonalfilter.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgepersonalfilter` |
| `msdyn_knowledgesearchfilter_MailboxTrackingFolders` | [msdyn_knowledgesearchfilter](msdyn_knowledgesearchfilter.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgesearchfilter` |
| `msdyn_knowledgesearchinsight_MailboxTrackingFolders` | [msdyn_knowledgesearchinsight](msdyn_knowledgesearchinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgesearchinsight` |
| `msdyn_mobileapp_MailboxTrackingFolders` | [msdyn_mobileapp](msdyn_mobileapp.md) | `regardingobjectid` | `regardingobjectid_msdyn_mobileapp` |
| `msdyn_modulerundetail_MailboxTrackingFolders` | [msdyn_modulerundetail](msdyn_modulerundetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_modulerundetail` |
| `msdyn_pmanalysishistory_MailboxTrackingFolders` | [msdyn_pmanalysishistory](msdyn_pmanalysishistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmanalysishistory` |
| `msdyn_pmbusinessruleautomationconfig_MailboxTrackingFolders` | [msdyn_pmbusinessruleautomationconfig](msdyn_pmbusinessruleautomationconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmbusinessruleautomationconfig` |
| `msdyn_pmcalendar_MailboxTrackingFolders` | [msdyn_pmcalendar](msdyn_pmcalendar.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmcalendar` |
| `msdyn_pmcalendarversion_MailboxTrackingFolders` | [msdyn_pmcalendarversion](msdyn_pmcalendarversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmcalendarversion` |
| `msdyn_pminferredtask_MailboxTrackingFolders` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `regardingobjectid` | `regardingobjectid_msdyn_pminferredtask` |
| `msdyn_pmprocessextendedmetadataversion_MailboxTrackingFolders` | [msdyn_pmprocessextendedmetadataversion](msdyn_pmprocessextendedmetadataversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessextendedmetadataversion` |
| `msdyn_pmprocesstemplate_MailboxTrackingFolders` | [msdyn_pmprocesstemplate](msdyn_pmprocesstemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocesstemplate` |
| `msdyn_pmprocessusersettings_MailboxTrackingFolders` | [msdyn_pmprocessusersettings](msdyn_pmprocessusersettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessusersettings` |
| `msdyn_pmprocessversion_MailboxTrackingFolders` | [msdyn_pmprocessversion](msdyn_pmprocessversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessversion` |
| `msdyn_pmrecording_MailboxTrackingFolders` | [msdyn_pmrecording](msdyn_pmrecording.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmrecording` |
| `msdyn_pmsimulation_MailboxTrackingFolders` | [msdyn_pmsimulation](msdyn_pmsimulation.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmsimulation` |
| `msdyn_pmtab_MailboxTrackingFolders` | [msdyn_pmtab](msdyn_pmtab.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmtab` |
| `msdyn_pmtemplate_MailboxTrackingFolders` | [msdyn_pmtemplate](msdyn_pmtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmtemplate` |
| `msdyn_pmview_MailboxTrackingFolders` | [msdyn_pmview](msdyn_pmview.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmview` |
| `msdyn_qna_MailboxTrackingFolders` | [msdyn_qna](msdyn_qna.md) | `regardingobjectid` | `regardingobjectid_msdyn_qna` |
| `msdyn_richtextfile_MailboxTrackingFolders` | [msdyn_richtextfile](msdyn_richtextfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_richtextfile` |
| `msdyn_salesforcestructuredobject_MailboxTrackingFolders` | [msdyn_salesforcestructuredobject](msdyn_salesforcestructuredobject.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesforcestructuredobject` |
| `msdyn_salesforcestructuredqnaconfig_MailboxTrackingFolders` | [msdyn_salesforcestructuredqnaconfig](msdyn_salesforcestructuredqnaconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesforcestructuredqnaconfig` |
| `msdyn_schedule_MailboxTrackingFolders` | [msdyn_schedule](msdyn_schedule.md) | `regardingobjectid` | `regardingobjectid_msdyn_schedule` |
| `msdyn_serviceconfiguration_MailboxTrackingFolders` | [msdyn_serviceconfiguration](msdyn_serviceconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_serviceconfiguration` |
| `msdyn_slakpi_MailboxTrackingFolders` | [msdyn_slakpi](msdyn_slakpi.md) | `regardingobjectid` | `regardingobjectid_msdyn_slakpi` |
| `msdyn_solutionhealthrule_MailboxTrackingFolders` | [msdyn_solutionhealthrule](msdyn_solutionhealthrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthrule` |
| `msdyn_solutionhealthruleargument_MailboxTrackingFolders` | [msdyn_solutionhealthruleargument](msdyn_solutionhealthruleargument.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthruleargument` |
| `msdyn_solutionhealthruleset_MailboxTrackingFolders` | [msdyn_solutionhealthruleset](msdyn_solutionhealthruleset.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthruleset` |
| `msdyn_tour_MailboxTrackingFolders` | [msdyn_tour](msdyn_tour.md) | `regardingobjectid` | `regardingobjectid_msdyn_tour` |
| `msdyn_virtualtablecolumncandidate_MailboxTrackingFolders` | [msdyn_virtualtablecolumncandidate](msdyn_virtualtablecolumncandidate.md) | `regardingobjectid` | `regardingobjectid_msdyn_virtualtablecolumncandidate` |
| `msdyn_workflowactionstatus_MailboxTrackingFolders` | [msdyn_workflowactionstatus](msdyn_workflowactionstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_workflowactionstatus` |
| `msdynce_botcontent_MailboxTrackingFolders` | [msdynce_botcontent](msdynce_botcontent.md) | `regardingobjectid` | `regardingobjectid_msdynce_botcontent` |
| `msgraphresourcetosubscription_MailboxTrackingFolders` | [msgraphresourcetosubscription](msgraphresourcetosubscription.md) | `regardingobjectid` | `regardingobjectid_msgraphresourcetosubscription` |
| `mspcat_catalogsubmissionfiles_MailboxTrackingFolders` | [mspcat_catalogsubmissionfiles](mspcat_catalogsubmissionfiles.md) | `regardingobjectid` | `regardingobjectid_mspcat_catalogsubmissionfiles` |
| `mspcat_packagestore_MailboxTrackingFolders` | [mspcat_packagestore](mspcat_packagestore.md) | `regardingobjectid` | `regardingobjectid_mspcat_packagestore` |
| `Organization_MailboxTrackingFolder` | [organization](organization.md) | `organizationid` | `organizationid` |
| `organizationdatasyncfnostate_MailboxTrackingFolders` | [organizationdatasyncfnostate](organizationdatasyncfnostate.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncfnostate` |
| `organizationdatasyncstate_MailboxTrackingFolders` | [organizationdatasyncstate](organizationdatasyncstate.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncstate` |
| `organizationdatasyncsubscription_MailboxTrackingFolders` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscription` |
| `organizationdatasyncsubscriptionentity_MailboxTrackingFolders` | [organizationdatasyncsubscriptionentity](organizationdatasyncsubscriptionentity.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscriptionentity` |
| `organizationdatasyncsubscriptionfnotable_MailboxTrackingFolders` | [organizationdatasyncsubscriptionfnotable](organizationdatasyncsubscriptionfnotable.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscriptionfnotable` |
| `owner_mailboxtrackingfolder` | [owner](owner.md) | `ownerid` | `ownerid` |
| `package_MailboxTrackingFolders` | [package](package.md) | `regardingobjectid` | `regardingobjectid_package` |
| `packagehistory_MailboxTrackingFolders` | [packagehistory](packagehistory.md) | `regardingobjectid` | `regardingobjectid_packagehistory` |
| `plannerbusinessscenario_MailboxTrackingFolders` | [plannerbusinessscenario](plannerbusinessscenario.md) | `regardingobjectid` | `regardingobjectid_plannerbusinessscenario` |
| `plannersyncaction_MailboxTrackingFolders` | [plannersyncaction](plannersyncaction.md) | `regardingobjectid` | `regardingobjectid_plannersyncaction` |
| `plugin_MailboxTrackingFolders` | [plugin](plugin.md) | `regardingobjectid` | `regardingobjectid_plugin` |
| `pluginpackage_MailboxTrackingFolders` | [pluginpackage](pluginpackage.md) | `regardingobjectid` | `regardingobjectid_pluginpackage` |
| `powerbidataset_MailboxTrackingFolders` | [powerbidataset](powerbidataset.md) | `regardingobjectid` | `regardingobjectid_powerbidataset` |
| `powerbidatasetapdx_MailboxTrackingFolders` | [powerbidatasetapdx](powerbidatasetapdx.md) | `regardingobjectid` | `regardingobjectid_powerbidatasetapdx` |
| `powerbimashupparameter_MailboxTrackingFolders` | [powerbimashupparameter](powerbimashupparameter.md) | `regardingobjectid` | `regardingobjectid_powerbimashupparameter` |
| `powerbireport_MailboxTrackingFolders` | [powerbireport](powerbireport.md) | `regardingobjectid` | `regardingobjectid_powerbireport` |
| `powerbireportapdx_MailboxTrackingFolders` | [powerbireportapdx](powerbireportapdx.md) | `regardingobjectid` | `regardingobjectid_powerbireportapdx` |
| `powerfxrule_MailboxTrackingFolders` | [powerfxrule](powerfxrule.md) | `regardingobjectid` | `regardingobjectid_powerfxrule` |
| `powerpagecomponent_MailboxTrackingFolders` | [powerpagecomponent](powerpagecomponent.md) | `regardingobjectid` | `regardingobjectid_powerpagecomponent` |
| `powerpagesddosalert_MailboxTrackingFolders` | [powerpagesddosalert](powerpagesddosalert.md) | `regardingobjectid` | `regardingobjectid_powerpagesddosalert` |
| `powerpagesite_MailboxTrackingFolders` | [powerpagesite](powerpagesite.md) | `regardingobjectid` | `regardingobjectid_powerpagesite` |
| `powerpagesitelanguage_MailboxTrackingFolders` | [powerpagesitelanguage](powerpagesitelanguage.md) | `regardingobjectid` | `regardingobjectid_powerpagesitelanguage` |
| `powerpagesitepublished_MailboxTrackingFolders` | [powerpagesitepublished](powerpagesitepublished.md) | `regardingobjectid` | `regardingobjectid_powerpagesitepublished` |
| `powerpagesmanagedidentity_MailboxTrackingFolders` | [powerpagesmanagedidentity](powerpagesmanagedidentity.md) | `regardingobjectid` | `regardingobjectid_powerpagesmanagedidentity` |
| `powerpagesscanreport_MailboxTrackingFolders` | [powerpagesscanreport](powerpagesscanreport.md) | `regardingobjectid` | `regardingobjectid_powerpagesscanreport` |
| `powerpagessourcefile_MailboxTrackingFolders` | [powerpagessourcefile](powerpagessourcefile.md) | `regardingobjectid` | `regardingobjectid_powerpagessourcefile` |
| `privilegecheckerlog_MailboxTrackingFolders` | [privilegecheckerlog](privilegecheckerlog.md) | `regardingobjectid` | `regardingobjectid_privilegecheckerlog` |
| `privilegecheckerrun_MailboxTrackingFolders` | [privilegecheckerrun](privilegecheckerrun.md) | `regardingobjectid` | `regardingobjectid_privilegecheckerrun` |
| `privilegesremovalsetting_MailboxTrackingFolders` | [privilegesremovalsetting](privilegesremovalsetting.md) | `regardingobjectid` | `regardingobjectid_privilegesremovalsetting` |
| `processstageparameter_MailboxTrackingFolders` | [processstageparameter](processstageparameter.md) | `regardingobjectid` | `regardingobjectid_processstageparameter` |
| `provisionlanguageforuser_MailboxTrackingFolders` | [provisionlanguageforuser](provisionlanguageforuser.md) | `regardingobjectid` | `regardingobjectid_provisionlanguageforuser` |
| `purviewlabelinfo_MailboxTrackingFolders` | [purviewlabelinfo](purviewlabelinfo.md) | `regardingobjectid` | `regardingobjectid_purviewlabelinfo` |
| `recordfilter_MailboxTrackingFolders` | [recordfilter](recordfilter.md) | `regardingobjectid` | `regardingobjectid_recordfilter` |
| `recyclebinconfig_MailboxTrackingFolders` | [recyclebinconfig](recyclebinconfig.md) | `regardingobjectid` | `regardingobjectid_recyclebinconfig` |
| `relationshipattribute_MailboxTrackingFolders` | [relationshipattribute](relationshipattribute.md) | `regardingobjectid` | `regardingobjectid_relationshipattribute` |
| `reportparameter_MailboxTrackingFolders` | [reportparameter](reportparameter.md) | `regardingobjectid` | `regardingobjectid_reportparameter` |
| `retaineddataexcel_MailboxTrackingFolders` | [retaineddataexcel](retaineddataexcel.md) | `regardingobjectid` | `regardingobjectid_retaineddataexcel` |
| `retentionconfig_MailboxTrackingFolders` | [retentionconfig](retentionconfig.md) | `regardingobjectid` | `regardingobjectid_retentionconfig` |
| `retentionfailuredetail_MailboxTrackingFolders` | [retentionfailuredetail](retentionfailuredetail.md) | `regardingobjectid` | `regardingobjectid_retentionfailuredetail` |
| `retentionoperation_MailboxTrackingFolders` | [retentionoperation](retentionoperation.md) | `regardingobjectid` | `regardingobjectid_retentionoperation` |
| `retentionoperationdetail_MailboxTrackingFolders` | [retentionoperationdetail](retentionoperationdetail.md) | `regardingobjectid` | `regardingobjectid_retentionoperationdetail` |
| `retentionsuccessdetail_MailboxTrackingFolders` | [retentionsuccessdetail](retentionsuccessdetail.md) | `regardingobjectid` | `regardingobjectid_retentionsuccessdetail` |
| `roleeditorlayout_MailboxTrackingFolders` | [roleeditorlayout](roleeditorlayout.md) | `regardingobjectid` | `regardingobjectid_roleeditorlayout` |
| `sa_suggestedaction_MailboxTrackingFolders` | [sa_suggestedaction](sa_suggestedaction.md) | `regardingobjectid` | `regardingobjectid_sa_suggestedaction` |
| `sa_suggestedactioncriteria_MailboxTrackingFolders` | [sa_suggestedactioncriteria](sa_suggestedactioncriteria.md) | `regardingobjectid` | `regardingobjectid_sa_suggestedactioncriteria` |
| `savingrule_MailboxTrackingFolders` | [savingrule](savingrule.md) | `regardingobjectid` | `regardingobjectid_savingrule` |
| `searchattributesettings_MailboxTrackingFolders` | [searchattributesettings](searchattributesettings.md) | `regardingobjectid` | `regardingobjectid_searchattributesettings` |
| `searchcustomanalyzer_MailboxTrackingFolders` | [searchcustomanalyzer](searchcustomanalyzer.md) | `regardingobjectid` | `regardingobjectid_searchcustomanalyzer` |
| `searchrelationshipsettings_MailboxTrackingFolders` | [searchrelationshipsettings](searchrelationshipsettings.md) | `regardingobjectid` | `regardingobjectid_searchrelationshipsettings` |
| `sensitivitylabelattributemapping_MailboxTrackingFolders` | [sensitivitylabelattributemapping](sensitivitylabelattributemapping.md) | `regardingobjectid` | `regardingobjectid_sensitivitylabelattributemapping` |
| `serviceplan_MailboxTrackingFolders` | [serviceplan](serviceplan.md) | `regardingobjectid` | `regardingobjectid_serviceplan` |
| `serviceplanmapping_MailboxTrackingFolders` | [serviceplanmapping](serviceplanmapping.md) | `regardingobjectid` | `regardingobjectid_serviceplanmapping` |
| `sharedlinksetting_MailboxTrackingFolders` | [sharedlinksetting](sharedlinksetting.md) | `regardingobjectid` | `regardingobjectid_sharedlinksetting` |
| `sharedobject_MailboxTrackingFolders` | [sharedobject](sharedobject.md) | `regardingobjectid` | `regardingobjectid_sharedobject` |
| `sharedworkspace_MailboxTrackingFolders` | [sharedworkspace](sharedworkspace.md) | `regardingobjectid` | `regardingobjectid_sharedworkspace` |
| `sharedworkspacepool_MailboxTrackingFolders` | [sharedworkspacepool](sharedworkspacepool.md) | `regardingobjectid` | `regardingobjectid_sharedworkspacepool` |
| `sharepointmanagedidentity_MailboxTrackingFolders` | [sharepointmanagedidentity](sharepointmanagedidentity.md) | `regardingobjectid` | `regardingobjectid_sharepointmanagedidentity` |
| `sideloadedaiplugin_MailboxTrackingFolders` | [sideloadedaiplugin](sideloadedaiplugin.md) | `regardingobjectid` | `regardingobjectid_sideloadedaiplugin` |
| `solutioncomponentattributeconfiguration_MailboxTrackingFolders` | [solutioncomponentattributeconfiguration](solutioncomponentattributeconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentattributeconfiguration` |
| `solutioncomponentbatchconfiguration_MailboxTrackingFolders` | [solutioncomponentbatchconfiguration](solutioncomponentbatchconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentbatchconfiguration` |
| `solutioncomponentconfiguration_MailboxTrackingFolders` | [solutioncomponentconfiguration](solutioncomponentconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentconfiguration` |
| `solutioncomponentrelationshipconfiguration_MailboxTrackingFolders` | [solutioncomponentrelationshipconfiguration](solutioncomponentrelationshipconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentrelationshipconfiguration` |
| `stagedentity_MailboxTrackingFolders` | [stagedentity](stagedentity.md) | `regardingobjectid` | `regardingobjectid_stagedentity` |
| `stagedentityattribute_MailboxTrackingFolders` | [stagedentityattribute](stagedentityattribute.md) | `regardingobjectid` | `regardingobjectid_stagedentityattribute` |
| `stagedmetadataasyncoperation_MailboxTrackingFolders` | [stagedmetadataasyncoperation](stagedmetadataasyncoperation.md) | `regardingobjectid` | `regardingobjectid_stagedmetadataasyncoperation` |
| `stagesolutionupload_MailboxTrackingFolders` | [stagesolutionupload](stagesolutionupload.md) | `regardingobjectid` | `regardingobjectid_stagesolutionupload` |
| `supportusertable_MailboxTrackingFolders` | [supportusertable](supportusertable.md) | `regardingobjectid` | `regardingobjectid_supportusertable` |
| `synapsedatabase_MailboxTrackingFolders` | [synapsedatabase](synapsedatabase.md) | `regardingobjectid` | `regardingobjectid_synapsedatabase` |
| `synapselinkexternaltablestate_MailboxTrackingFolders` | [synapselinkexternaltablestate](synapselinkexternaltablestate.md) | `regardingobjectid` | `regardingobjectid_synapselinkexternaltablestate` |
| `synapselinkprofile_MailboxTrackingFolders` | [synapselinkprofile](synapselinkprofile.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofile` |
| `synapselinkprofileentity_MailboxTrackingFolders` | [synapselinkprofileentity](synapselinkprofileentity.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofileentity` |
| `synapselinkprofileentitystate_MailboxTrackingFolders` | [synapselinkprofileentitystate](synapselinkprofileentitystate.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofileentitystate` |
| `synapselinkschedule_MailboxTrackingFolders` | [synapselinkschedule](synapselinkschedule.md) | `regardingobjectid` | `regardingobjectid_synapselinkschedule` |
| `systemuserauthorizationchangetracker_MailboxTrackingFolders` | [systemuserauthorizationchangetracker](systemuserauthorizationchangetracker.md) | `regardingobjectid` | `regardingobjectid_systemuserauthorizationchangetracker` |
| `tag_MailboxTrackingFolders` | [tag](tag.md) | `regardingobjectid` | `regardingobjectid_tag` |
| `taggedflowsession_MailboxTrackingFolders` | [taggedflowsession](taggedflowsession.md) | `regardingobjectid` | `regardingobjectid_taggedflowsession` |
| `taggedprocess_MailboxTrackingFolders` | [taggedprocess](taggedprocess.md) | `regardingobjectid` | `regardingobjectid_taggedprocess` |
| `team_mailboxtrackingfolder` | [team](team.md) | `owningteam` | `owningteam` |
| `teammobileofflineprofilemembership_MailboxTrackingFolders` | [teammobileofflineprofilemembership](teammobileofflineprofilemembership.md) | `regardingobjectid` | `regardingobjectid_teammobileofflineprofilemembership` |
| `territory_MailboxTrackingFolders` | [territory](territory.md) | `regardingobjectid` | `regardingobjectid_territory` |
| `unstructuredfilesearchentity_MailboxTrackingFolders` | [unstructuredfilesearchentity](unstructuredfilesearchentity.md) | `regardingobjectid` | `regardingobjectid_unstructuredfilesearchentity` |
| `unstructuredfilesearchrecord_MailboxTrackingFolders` | [unstructuredfilesearchrecord](unstructuredfilesearchrecord.md) | `regardingobjectid` | `regardingobjectid_unstructuredfilesearchrecord` |
| `usermobileofflineprofilemembership_MailboxTrackingFolders` | [usermobileofflineprofilemembership](usermobileofflineprofilemembership.md) | `regardingobjectid` | `regardingobjectid_usermobileofflineprofilemembership` |
| `userrating_MailboxTrackingFolders` | [userrating](userrating.md) | `regardingobjectid` | `regardingobjectid_userrating` |
| `viewasexamplequestion_MailboxTrackingFolders` | [viewasexamplequestion](viewasexamplequestion.md) | `regardingobjectid` | `regardingobjectid_viewasexamplequestion` |
| `virtualentitymetadata_MailboxTrackingFolders` | [virtualentitymetadata](virtualentitymetadata.md) | `regardingobjectid` | `regardingobjectid_virtualentitymetadata` |
| `workflowbinary_MailboxTrackingFolders` | [workflowbinary](workflowbinary.md) | `regardingobjectid` | `regardingobjectid_workflowbinary` |
| `workflowmetadata_MailboxTrackingFolders` | [workflowmetadata](workflowmetadata.md) | `regardingobjectid` | `regardingobjectid_workflowmetadata` |
| `workqueue_MailboxTrackingFolders` | [workqueue](workqueue.md) | `regardingobjectid` | `regardingobjectid_workqueue` |
| `workqueueitem_MailboxTrackingFolders` | [workqueueitem](workqueueitem.md) | `regardingobjectid` | `regardingobjectid_workqueueitem` |



## Source

Generated from [mailboxtrackingfolder.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mailboxtrackingfolder.md) on 2026-05-06.