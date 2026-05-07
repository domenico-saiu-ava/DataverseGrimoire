---
logical: "syncerror"
display: "Sync Error"
entitySetName: "syncerrors"
primaryId: "syncerrorid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Sync Error

Failure reason and other detailed information for a record that failed to sync.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `syncerror` |
| Display name | Sync Error |
| Display (plural) | Sync Errors |
| Schema name | `SyncError` |
| Entity set (Web API) | `syncerrors` |
| Primary id attribute | `syncerrorid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/syncerrors?$select=name&$top=10
GET /api/data/v9.2/syncerrors(<guid>)
POST /api/data/v9.2/syncerrors
PATCH /api/data/v9.2/syncerrors(<guid>)
DELETE /api/data/v9.2/syncerrors(<guid>)
```

## Attributes

Writable: **17** · Read-only: **12**

### Writable

`Action`, `ActionData`, `Description`, `ErrorCode`, `ErrorDetail`, `ErrorMessage`, `ErrorTime`, `ErrorType`, `Name`, `OwnerId`, `OwnerIdType`, `RegardingObjectId`, `RegardingObjectTypeCode`, `RequestData`, `StateCode`, `StatusCode`, `SyncErrorId`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (387)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Account_SyncErrors` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_syncerror` |
| `activityfileattachment_SyncErrors` | [activityfileattachment](activityfileattachment.md) | `regardingobjectid` | `regardingobjectid_activityfileattachment` |
| `ActivityMimeAttachment_SyncErrors` | [activitymimeattachment](activitymimeattachment.md) | `regardingobjectid` | `regardingobjectid_activitymimeattachment_syncerror` |
| `ActivityParty_SyncErrors` | [activityparty](activityparty.md) | `regardingobjectid` | `regardingobjectid_activityparty_syncerror` |
| `adx_externalidentity_SyncErrors` | [adx_externalidentity](adx_externalidentity.md) | `regardingobjectid` | `regardingobjectid_adx_externalidentity` |
| `adx_invitation_SyncErrors` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation` |
| `adx_inviteredemption_SyncErrors` | [adx_inviteredemption](adx_inviteredemption.md) | `regardingobjectid` | `regardingobjectid_adx_inviteredemption` |
| `adx_portalcomment_SyncErrors` | [adx_portalcomment](adx_portalcomment.md) | `regardingobjectid` | `regardingobjectid_adx_portalcomment` |
| `adx_setting_SyncErrors` | [adx_setting](adx_setting.md) | `regardingobjectid` | `regardingobjectid_adx_setting` |
| `adx_webformsession_SyncErrors` | [adx_webformsession](adx_webformsession.md) | `regardingobjectid` | `regardingobjectid_adx_webformsession` |
| `aicopilot_SyncErrors` | [aicopilot](aicopilot.md) | `regardingobjectid` | `regardingobjectid_aicopilot` |
| `aiplugin_SyncErrors` | [aiplugin](aiplugin.md) | `regardingobjectid` | `regardingobjectid_aiplugin` |
| `aipluginauth_SyncErrors` | [aipluginauth](aipluginauth.md) | `regardingobjectid` | `regardingobjectid_aipluginauth` |
| `aipluginconversationstarter_SyncErrors` | [aipluginconversationstarter](aipluginconversationstarter.md) | `regardingobjectid` | `regardingobjectid_aipluginconversationstarter` |
| `aipluginconversationstartermapping_SyncErrors` | [aipluginconversationstartermapping](aipluginconversationstartermapping.md) | `regardingobjectid` | `regardingobjectid_aipluginconversationstartermapping` |
| `aipluginexternalschema_SyncErrors` | [aipluginexternalschema](aipluginexternalschema.md) | `regardingobjectid` | `regardingobjectid_aipluginexternalschema` |
| `aipluginexternalschemaproperty_SyncErrors` | [aipluginexternalschemaproperty](aipluginexternalschemaproperty.md) | `regardingobjectid` | `regardingobjectid_aipluginexternalschemaproperty` |
| `aiplugingovernance_SyncErrors` | [aiplugingovernance](aiplugingovernance.md) | `regardingobjectid` | `regardingobjectid_aiplugingovernance` |
| `aiplugingovernanceext_SyncErrors` | [aiplugingovernanceext](aiplugingovernanceext.md) | `regardingobjectid` | `regardingobjectid_aiplugingovernanceext` |
| `aiplugininstance_SyncErrors` | [aiplugininstance](aiplugininstance.md) | `regardingobjectid` | `regardingobjectid_aiplugininstance` |
| `aipluginoperation_SyncErrors` | [aipluginoperation](aipluginoperation.md) | `regardingobjectid` | `regardingobjectid_aipluginoperation` |
| `aipluginoperationparameter_SyncErrors` | [aipluginoperationparameter](aipluginoperationparameter.md) | `regardingobjectid` | `regardingobjectid_aipluginoperationparameter` |
| `aipluginoperationresponsetemplate_SyncErrors` | [aipluginoperationresponsetemplate](aipluginoperationresponsetemplate.md) | `regardingobjectid` | `regardingobjectid_aipluginoperationresponsetemplate` |
| `aiplugintitle_SyncErrors` | [aiplugintitle](aiplugintitle.md) | `regardingobjectid` | `regardingobjectid_aiplugintitle` |
| `aipluginusersetting_SyncErrors` | [aipluginusersetting](aipluginusersetting.md) | `regardingobjectid` | `regardingobjectid_aipluginusersetting` |
| `allowedmcpclient_SyncErrors` | [allowedmcpclient](allowedmcpclient.md) | `regardingobjectid` | `regardingobjectid_allowedmcpclient` |
| `Annotation_SyncErrors` | [annotation](annotation.md) | `regardingobjectid` | `regardingobjectid_annotation_syncerror` |
| `appaction_SyncErrors` | [appaction](appaction.md) | `regardingobjectid` | `regardingobjectid_appaction` |
| `appactionmigration_SyncErrors` | [appactionmigration](appactionmigration.md) | `regardingobjectid` | `regardingobjectid_appactionmigration` |
| `appactionrule_SyncErrors` | [appactionrule](appactionrule.md) | `regardingobjectid` | `regardingobjectid_appactionrule` |
| `application_SyncErrors` | [application](application.md) | `regardingobjectid` | `regardingobjectid_application` |
| `applicationuser_SyncErrors` | [applicationuser](applicationuser.md) | `regardingobjectid` | `regardingobjectid_applicationuser` |
| `Appointment_SyncErrors` | [appointment](appointment.md) | `regardingobjectid` | `regardingobjectid_appointment_syncerror` |
| `approvalprocess_SyncErrors` | [approvalprocess](approvalprocess.md) | `regardingobjectid` | `regardingobjectid_approvalprocess` |
| `approvalstageapproval_SyncErrors` | [approvalstageapproval](approvalstageapproval.md) | `regardingobjectid` | `regardingobjectid_approvalstageapproval` |
| `approvalstagecondition_SyncErrors` | [approvalstagecondition](approvalstagecondition.md) | `regardingobjectid` | `regardingobjectid_approvalstagecondition` |
| `approvalstageintelligent_SyncErrors` | [approvalstageintelligent](approvalstageintelligent.md) | `regardingobjectid` | `regardingobjectid_approvalstageintelligent` |
| `approvalstageorder_SyncErrors` | [approvalstageorder](approvalstageorder.md) | `regardingobjectid` | `regardingobjectid_approvalstageorder` |
| `Attachment_SyncErrors` | [attachment](attachment.md) | `regardingobjectid` | `regardingobjectid_attachment_syncerror` |
| `attributeclusterconfig_SyncErrors` | [attributeclusterconfig](attributeclusterconfig.md) | `regardingobjectid` | `regardingobjectid_attributeclusterconfig` |
| `attributeimageconfig_SyncErrors` | [attributeimageconfig](attributeimageconfig.md) | `regardingobjectid` | `regardingobjectid_attributeimageconfig` |
| `attributemaskingrule_SyncErrors` | [attributemaskingrule](attributemaskingrule.md) | `regardingobjectid` | `regardingobjectid_attributemaskingrule` |
| `attributepicklistvalue_SyncErrors` | [attributepicklistvalue](attributepicklistvalue.md) | `regardingobjectid` | `regardingobjectid_attributepicklistvalue` |
| `bot_SyncErrors` | [bot](bot.md) | `regardingobjectid` | `regardingobjectid_bot` |
| `botcomponent_SyncErrors` | [botcomponent](botcomponent.md) | `regardingobjectid` | `regardingobjectid_botcomponent` |
| `botcomponentcollection_SyncErrors` | [botcomponentcollection](botcomponentcollection.md) | `regardingobjectid` | `regardingobjectid_botcomponentcollection` |
| `businessprocess_SyncErrors` | [businessprocess](businessprocess.md) | `regardingobjectid` | `regardingobjectid_businessprocess` |
| `BusinessUnit_SyncError` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `BusinessUnit_SyncErrors` | [businessunit](businessunit.md) | `regardingobjectid` | `regardingobjectid_businessunit_syncerror` |
| `card_SyncErrors` | [card](card.md) | `regardingobjectid` | `regardingobjectid_card` |
| `catalog_SyncErrors` | [catalog](catalog.md) | `regardingobjectid` | `regardingobjectid_catalog` |
| `catalogassignment_SyncErrors` | [catalogassignment](catalogassignment.md) | `regardingobjectid` | `regardingobjectid_catalogassignment` |
| `Category_SyncErrors` | [category](category.md) | `regardingobjectid` | `regardingobjectid_category_syncerror` |
| `certificatecredential_SyncErrors` | [certificatecredential](certificatecredential.md) | `regardingobjectid` | `regardingobjectid_certificatecredential` |
| `chat_SyncErrors` | [chat](chat.md) | `regardingobjectid` | `regardingobjectid_chat` |
| `Connection_SyncErrors` | [connection](connection.md) | `regardingobjectid` | `regardingobjectid_connection_syncerror` |
| `connectioninstance_SyncErrors` | [connectioninstance](connectioninstance.md) | `regardingobjectid` | `regardingobjectid_connectioninstance` |
| `connectionreference_SyncErrors` | [connectionreference](connectionreference.md) | `regardingobjectid` | `regardingobjectid_connectionreference` |
| `ConnectionRole_SyncErrors` | [connectionrole](connectionrole.md) | `regardingobjectid` | `regardingobjectid_connectionrole_syncerror` |
| `connector_SyncErrors` | [connector](connector.md) | `regardingobjectid` | `regardingobjectid_connector` |
| `Contact_SyncErrors` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_syncerror` |
| `conversationtranscript_SyncErrors` | [conversationtranscript](conversationtranscript.md) | `regardingobjectid` | `regardingobjectid_conversationtranscript` |
| `copilotexamplequestion_SyncErrors` | [copilotexamplequestion](copilotexamplequestion.md) | `regardingobjectid` | `regardingobjectid_copilotexamplequestion` |
| `copilotglossaryterm_SyncErrors` | [copilotglossaryterm](copilotglossaryterm.md) | `regardingobjectid` | `regardingobjectid_copilotglossaryterm` |
| `copilotsynonyms_SyncErrors` | [copilotsynonyms](copilotsynonyms.md) | `regardingobjectid` | `regardingobjectid_copilotsynonyms` |
| `credential_SyncErrors` | [credential](credential.md) | `regardingobjectid` | `regardingobjectid_credential` |
| `customapi_SyncErrors` | [customapi](customapi.md) | `regardingobjectid` | `regardingobjectid_customapi` |
| `customapirequestparameter_SyncErrors` | [customapirequestparameter](customapirequestparameter.md) | `regardingobjectid` | `regardingobjectid_customapirequestparameter` |
| `customapiresponseproperty_SyncErrors` | [customapiresponseproperty](customapiresponseproperty.md) | `regardingobjectid` | `regardingobjectid_customapiresponseproperty` |
| `CustomerAddress_SyncErrors` | [customeraddress](customeraddress.md) | `regardingobjectid` | `regardingobjectid_customeraddress_syncerror` |
| `datalakefolder_SyncErrors` | [datalakefolder](datalakefolder.md) | `regardingobjectid` | `regardingobjectid_datalakefolder` |
| `datalakefolderpermission_SyncErrors` | [datalakefolderpermission](datalakefolderpermission.md) | `regardingobjectid` | `regardingobjectid_datalakefolderpermission` |
| `datalakeworkspace_SyncErrors` | [datalakeworkspace](datalakeworkspace.md) | `regardingobjectid` | `regardingobjectid_datalakeworkspace` |
| `datalakeworkspacepermission_SyncErrors` | [datalakeworkspacepermission](datalakeworkspacepermission.md) | `regardingobjectid` | `regardingobjectid_datalakeworkspacepermission` |
| `dataprocessingconfiguration_SyncErrors` | [dataprocessingconfiguration](dataprocessingconfiguration.md) | `regardingobjectid` | `regardingobjectid_dataprocessingconfiguration` |
| `delegatedauthorization_SyncErrors` | [delegatedauthorization](delegatedauthorization.md) | `regardingobjectid` | `regardingobjectid_delegatedauthorization` |
| `desktopflowbinary_SyncErrors` | [desktopflowbinary](desktopflowbinary.md) | `regardingobjectid` | `regardingobjectid_desktopflowbinary` |
| `desktopflowmodule_SyncErrors` | [desktopflowmodule](desktopflowmodule.md) | `regardingobjectid` | `regardingobjectid_desktopflowmodule` |
| `DuplicateRule_SyncErrors` | [duplicaterule](duplicaterule.md) | `regardingobjectid` | `regardingobjectid_duplicaterule_syncerror` |
| `DuplicateRuleCondition_SyncErrors` | [duplicaterulecondition](duplicaterulecondition.md) | `regardingobjectid` | `regardingobjectid_duplicaterulecondition_syncerror` |
| `dvfilesearch_SyncErrors` | [dvfilesearch](dvfilesearch.md) | `regardingobjectid` | `regardingobjectid_dvfilesearch` |
| `dvfilesearchattribute_SyncErrors` | [dvfilesearchattribute](dvfilesearchattribute.md) | `regardingobjectid` | `regardingobjectid_dvfilesearchattribute` |
| `dvfilesearchentity_SyncErrors` | [dvfilesearchentity](dvfilesearchentity.md) | `regardingobjectid` | `regardingobjectid_dvfilesearchentity` |
| `dvtablesearch_SyncErrors` | [dvtablesearch](dvtablesearch.md) | `regardingobjectid` | `regardingobjectid_dvtablesearch` |
| `dvtablesearchattribute_SyncErrors` | [dvtablesearchattribute](dvtablesearchattribute.md) | `regardingobjectid` | `regardingobjectid_dvtablesearchattribute` |
| `dvtablesearchentity_SyncErrors` | [dvtablesearchentity](dvtablesearchentity.md) | `regardingobjectid` | `regardingobjectid_dvtablesearchentity` |
| `Email_SyncErrors` | [email](email.md) | `regardingobjectid` | `regardingobjectid_email_syncerror` |
| `emailaddressconfiguration_SyncErrors` | [emailaddressconfiguration](emailaddressconfiguration.md) | `regardingobjectid` | `regardingobjectid_emailaddressconfiguration` |
| `EmailServerProfile_SyncErrors` | [emailserverprofile](emailserverprofile.md) | `regardingobjectid` | `regardingobjectid_emailserverprofile_syncerror` |
| `entityanalyticsconfig_SyncErrors` | [entityanalyticsconfig](entityanalyticsconfig.md) | `regardingobjectid` | `regardingobjectid_entityanalyticsconfig` |
| `entityclusterconfig_SyncErrors` | [entityclusterconfig](entityclusterconfig.md) | `regardingobjectid` | `regardingobjectid_entityclusterconfig` |
| `entityimageconfig_SyncErrors` | [entityimageconfig](entityimageconfig.md) | `regardingobjectid` | `regardingobjectid_entityimageconfig` |
| `entityindex_SyncErrors` | [entityindex](entityindex.md) | `regardingobjectid` | `regardingobjectid_entityindex` |
| `entityrecordfilter_SyncErrors` | [entityrecordfilter](entityrecordfilter.md) | `regardingobjectid` | `regardingobjectid_entityrecordfilter` |
| `environmentvariabledefinition_SyncErrors` | [environmentvariabledefinition](environmentvariabledefinition.md) | `regardingobjectid` | `regardingobjectid_environmentvariabledefinition` |
| `environmentvariablevalue_SyncErrors` | [environmentvariablevalue](environmentvariablevalue.md) | `regardingobjectid` | `regardingobjectid_environmentvariablevalue` |
| `ExpiredProcess_SyncErrors` | [expiredprocess](expiredprocess.md) | `regardingobjectid` | `regardingobjectid_ExpiredProcess_syncerror` |
| `exportedexcel_SyncErrors` | [exportedexcel](exportedexcel.md) | `regardingobjectid` | `regardingobjectid_exportedexcel` |
| `exportsolutionupload_SyncErrors` | [exportsolutionupload](exportsolutionupload.md) | `regardingobjectid` | `regardingobjectid_exportsolutionupload` |
| `fabricaiskill_SyncErrors` | [fabricaiskill](fabricaiskill.md) | `regardingobjectid` | `regardingobjectid_fabricaiskill` |
| `Fax_SyncErrors` | [fax](fax.md) | `regardingobjectid` | `regardingobjectid_fax_syncerror` |
| `featurecontrolsetting_SyncErrors` | [featurecontrolsetting](featurecontrolsetting.md) | `regardingobjectid` | `regardingobjectid_featurecontrolsetting` |
| `federatedknowledgeconfiguration_SyncErrors` | [federatedknowledgeconfiguration](federatedknowledgeconfiguration.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgeconfiguration` |
| `federatedknowledgeentityconfiguration_SyncErrors` | [federatedknowledgeentityconfiguration](federatedknowledgeentityconfiguration.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgeentityconfiguration` |
| `Feedback_SyncErrors` | [feedback](feedback.md) | `regardingobjectid` | `regardingobjectid_feedback_syncerror` |
| `FieldPermission_SyncErrors` | [fieldpermission](fieldpermission.md) | `regardingobjectid` | `regardingobjectid_fieldpermission_syncerror` |
| `FieldSecurityProfile_SyncErrors` | [fieldsecurityprofile](fieldsecurityprofile.md) | `regardingobjectid` | `regardingobjectid_fieldsecurityprofile_syncerror` |
| `FileAttachment_SyncErrors` | [fileattachment](fileattachment.md) | `regardingobjectid` | `regardingobjectid_fileattachment_syncerror` |
| `flowcapacityassignment_SyncErrors` | [flowcapacityassignment](flowcapacityassignment.md) | `regardingobjectid` | `regardingobjectid_flowcapacityassignment` |
| `flowcredentialapplication_SyncErrors` | [flowcredentialapplication](flowcredentialapplication.md) | `regardingobjectid` | `regardingobjectid_flowcredentialapplication` |
| `flowevent_SyncErrors` | [flowevent](flowevent.md) | `regardingobjectid` | `regardingobjectid_flowevent` |
| `flowmachine_SyncErrors` | [flowmachine](flowmachine.md) | `regardingobjectid` | `regardingobjectid_flowmachine` |
| `flowmachinegroup_SyncErrors` | [flowmachinegroup](flowmachinegroup.md) | `regardingobjectid` | `regardingobjectid_flowmachinegroup` |
| `flowmachineimage_SyncErrors` | [flowmachineimage](flowmachineimage.md) | `regardingobjectid` | `regardingobjectid_flowmachineimage` |
| `flowmachineimageversion_SyncErrors` | [flowmachineimageversion](flowmachineimageversion.md) | `regardingobjectid` | `regardingobjectid_flowmachineimageversion` |
| `flowmachinenetwork_SyncErrors` | [flowmachinenetwork](flowmachinenetwork.md) | `regardingobjectid` | `regardingobjectid_flowmachinenetwork` |
| `flowsession_SyncErrors` | [flowsession](flowsession.md) | `regardingobjectid` | `regardingobjectid_flowsession` |
| `flowsessionbinary_SyncErrors` | [flowsessionbinary](flowsessionbinary.md) | `regardingobjectid` | `regardingobjectid_flowsessionbinary` |
| `fxexpression_SyncErrors` | [fxexpression](fxexpression.md) | `regardingobjectid` | `regardingobjectid_fxexpression` |
| `Goal_SyncErrors` | [goal](goal.md) | `regardingobjectid` | `regardingobjectid_goal_syncerror` |
| `GoalRollupQuery_SyncErrors` | [goalrollupquery](goalrollupquery.md) | `regardingobjectid` | `regardingobjectid_goalrollupquery_syncerror` |
| `governanceconfiguration_SyncErrors` | [governanceconfiguration](governanceconfiguration.md) | `regardingobjectid` | `regardingobjectid_governanceconfiguration` |
| `ImportMap_SyncErrors` | [importmap](importmap.md) | `regardingobjectid` | `regardingobjectid_importmap_syncerror` |
| `indexattributes_SyncErrors` | [indexattributes](indexattributes.md) | `regardingobjectid` | `regardingobjectid_indexattributes` |
| `KbArticle_SyncErrors` | [kbarticle](kbarticle.md) | `regardingobjectid` | `regardingobjectid_kbarticle_syncerror` |
| `KbArticleTemplate_SyncErrors` | [kbarticletemplate](kbarticletemplate.md) | `regardingobjectid` | `regardingobjectid_kbarticletemplate_syncerror` |
| `keyvaultreference_SyncErrors` | [keyvaultreference](keyvaultreference.md) | `regardingobjectid` | `regardingobjectid_keyvaultreference` |
| `KnowledgeArticle_SyncErrors` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_syncerror` |
| `KnowledgeArticleViews_SyncErrors` | [knowledgearticleviews](knowledgearticleviews.md) | `regardingobjectid` | `regardingobjectid_knowledgearticleviews_syncerror` |
| `KnowledgeBaseRecord_SyncErrors` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_syncerror` |
| `knowledgefaq_SyncErrors` | [knowledgefaq](knowledgefaq.md) | `regardingobjectid` | `regardingobjectid_knowledgefaq` |
| `Letter_SyncErrors` | [letter](letter.md) | `regardingobjectid` | `regardingobjectid_letter_syncerror` |
| `lk_syncerrorbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_syncerrorbase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_syncerrorbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_syncerrorbase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `Mailbox_SyncErrors` | [mailbox](mailbox.md) | `regardingobjectid` | `regardingobjectid_mailbox_syncerror` |
| `MailMergeTemplate_SyncErrors` | [mailmergetemplate](mailmergetemplate.md) | `regardingobjectid` | `regardingobjectid_mailmergetemplate_syncerror` |
| `mainfewshot_SyncErrors` | [mainfewshot](mainfewshot.md) | `regardingobjectid` | `regardingobjectid_mainfewshot` |
| `makerfewshot_SyncErrors` | [makerfewshot](makerfewshot.md) | `regardingobjectid` | `regardingobjectid_makerfewshot` |
| `managedidentity_SyncErrors` | [managedidentity](managedidentity.md) | `regardingobjectid` | `regardingobjectid_managedidentity` |
| `maskingrule_SyncErrors` | [maskingrule](maskingrule.md) | `regardingobjectid` | `regardingobjectid_maskingrule` |
| `mcpserver_SyncErrors` | [mcpserver](mcpserver.md) | `regardingobjectid` | `regardingobjectid_mcpserver` |
| `mcptool_SyncErrors` | [mcptool](mcptool.md) | `regardingobjectid` | `regardingobjectid_mcptool` |
| `metadataforarchival_SyncErrors` | [metadataforarchival](metadataforarchival.md) | `regardingobjectid` | `regardingobjectid_metadataforarchival` |
| `Metric_SyncErrors` | [metric](metric.md) | `regardingobjectid` | `regardingobjectid_metric_syncerror` |
| `mobileofflineprofileextension_SyncErrors` | [mobileofflineprofileextension](mobileofflineprofileextension.md) | `regardingobjectid` | `regardingobjectid_mobileofflineprofileextension` |
| `msdyn_aibdataset_SyncErrors` | [msdyn_aibdataset](msdyn_aibdataset.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdataset` |
| `msdyn_aibdatasetfile_SyncErrors` | [msdyn_aibdatasetfile](msdyn_aibdatasetfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetfile` |
| `msdyn_aibdatasetrecord_SyncErrors` | [msdyn_aibdatasetrecord](msdyn_aibdatasetrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetrecord` |
| `msdyn_aibdatasetscontainer_SyncErrors` | [msdyn_aibdatasetscontainer](msdyn_aibdatasetscontainer.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetscontainer` |
| `msdyn_aibfeedbackloop_SyncErrors` | [msdyn_aibfeedbackloop](msdyn_aibfeedbackloop.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfeedbackloop` |
| `msdyn_aibfile_SyncErrors` | [msdyn_aibfile](msdyn_aibfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfile` |
| `msdyn_aibfileattacheddata_SyncErrors` | [msdyn_aibfileattacheddata](msdyn_aibfileattacheddata.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfileattacheddata` |
| `msdyn_aiconfiguration_SyncErrors` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiconfiguration` |
| `msdyn_aidataprocessingevent_SyncErrors` | [msdyn_aidataprocessingevent](msdyn_aidataprocessingevent.md) | `regardingobjectid` | `regardingobjectid_msdyn_aidataprocessingevent` |
| `msdyn_aidocumenttemplate_SyncErrors` | [msdyn_aidocumenttemplate](msdyn_aidocumenttemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_aidocumenttemplate` |
| `msdyn_aievaluationconfiguration_SyncErrors` | [msdyn_aievaluationconfiguration](msdyn_aievaluationconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievaluationconfiguration` |
| `msdyn_aievaluationrun_SyncErrors` | [msdyn_aievaluationrun](msdyn_aievaluationrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievaluationrun` |
| `msdyn_aievent_SyncErrors` | [msdyn_aievent](msdyn_aievent.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievent` |
| `msdyn_aifptrainingdocument_SyncErrors` | [msdyn_aifptrainingdocument](msdyn_aifptrainingdocument.md) | `regardingobjectid` | `regardingobjectid_msdyn_aifptrainingdocument` |
| `msdyn_aimodel_SyncErrors` | [msdyn_aimodel](msdyn_aimodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_aimodel` |
| `msdyn_aiodimage_SyncErrors` | [msdyn_aiodimage](msdyn_aiodimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodimage` |
| `msdyn_aiodlabel_SyncErrors` | [msdyn_aiodlabel](msdyn_aiodlabel.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodlabel` |
| `msdyn_aiodtrainingboundingbox_SyncErrors` | [msdyn_aiodtrainingboundingbox](msdyn_aiodtrainingboundingbox.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodtrainingboundingbox` |
| `msdyn_aiodtrainingimage_SyncErrors` | [msdyn_aiodtrainingimage](msdyn_aiodtrainingimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodtrainingimage` |
| `msdyn_aitemplate_SyncErrors` | [msdyn_aitemplate](msdyn_aitemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitemplate` |
| `msdyn_aitestcase_SyncErrors` | [msdyn_aitestcase](msdyn_aitestcase.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcase` |
| `msdyn_aitestcasedocument_SyncErrors` | [msdyn_aitestcasedocument](msdyn_aitestcasedocument.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcasedocument` |
| `msdyn_aitestcaseinput_SyncErrors` | [msdyn_aitestcaseinput](msdyn_aitestcaseinput.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcaseinput` |
| `msdyn_aitestrun_SyncErrors` | [msdyn_aitestrun](msdyn_aitestrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestrun` |
| `msdyn_aitestrunbatch_SyncErrors` | [msdyn_aitestrunbatch](msdyn_aitestrunbatch.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestrunbatch` |
| `msdyn_analysiscomponent_SyncErrors` | [msdyn_analysiscomponent](msdyn_analysiscomponent.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysiscomponent` |
| `msdyn_analysisjob_SyncErrors` | [msdyn_analysisjob](msdyn_analysisjob.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisjob` |
| `msdyn_analysisoverride_SyncErrors` | [msdyn_analysisoverride](msdyn_analysisoverride.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisoverride` |
| `msdyn_analysisresult_SyncErrors` | [msdyn_analysisresult](msdyn_analysisresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisresult` |
| `msdyn_analysisresultdetail_SyncErrors` | [msdyn_analysisresultdetail](msdyn_analysisresultdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisresultdetail` |
| `msdyn_appinsightsmetadata_SyncErrors` | [msdyn_appinsightsmetadata](msdyn_appinsightsmetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_appinsightsmetadata` |
| `msdyn_copilotinteractions_SyncErrors` | [msdyn_copilotinteractions](msdyn_copilotinteractions.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotinteractions` |
| `msdyn_customcontrolextendedsettings_SyncErrors` | [msdyn_customcontrolextendedsettings](msdyn_customcontrolextendedsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_customcontrolextendedsettings` |
| `msdyn_dataflow_datalakefolder_SyncErrors` | [msdyn_dataflow_datalakefolder](msdyn_dataflow_datalakefolder.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflow_datalakefolder` |
| `msdyn_dataflow_SyncErrors` | [msdyn_dataflow](msdyn_dataflow.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflow` |
| `msdyn_dataflowconnectionreference_SyncErrors` | [msdyn_dataflowconnectionreference](msdyn_dataflowconnectionreference.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowconnectionreference` |
| `msdyn_dataflowrefreshhistory_SyncErrors` | [msdyn_dataflowrefreshhistory](msdyn_dataflowrefreshhistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowrefreshhistory` |
| `msdyn_dataflowtemplate_SyncErrors` | [msdyn_dataflowtemplate](msdyn_dataflowtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowtemplate` |
| `msdyn_dmsrequest_SyncErrors` | [msdyn_dmsrequest](msdyn_dmsrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmsrequest` |
| `msdyn_dmsrequeststatus_SyncErrors` | [msdyn_dmsrequeststatus](msdyn_dmsrequeststatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmsrequeststatus` |
| `msdyn_dmssyncrequest_SyncErrors` | [msdyn_dmssyncrequest](msdyn_dmssyncrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmssyncrequest` |
| `msdyn_dmssyncstatus_SyncErrors` | [msdyn_dmssyncstatus](msdyn_dmssyncstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmssyncstatus` |
| `msdyn_entitylinkchatconfiguration_SyncErrors` | [msdyn_entitylinkchatconfiguration](msdyn_entitylinkchatconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_entitylinkchatconfiguration` |
| `msdyn_entityrefreshhistory_SyncErrors` | [msdyn_entityrefreshhistory](msdyn_entityrefreshhistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityrefreshhistory` |
| `msdyn_favoriteknowledgearticle_SyncErrors` | [msdyn_favoriteknowledgearticle](msdyn_favoriteknowledgearticle.md) | `regardingobjectid` | `regardingobjectid_msdyn_favoriteknowledgearticle` |
| `msdyn_federatedarticle_SyncErrors` | [msdyn_federatedarticle](msdyn_federatedarticle.md) | `regardingobjectid` | `regardingobjectid_msdyn_federatedarticle` |
| `msdyn_federatedarticleincident_SyncErrors` | [msdyn_federatedarticleincident](msdyn_federatedarticleincident.md) | `regardingobjectid` | `regardingobjectid_msdyn_federatedarticleincident` |
| `msdyn_fileupload_SyncErrors` | [msdyn_fileupload](msdyn_fileupload.md) | `regardingobjectid` | `regardingobjectid_msdyn_fileupload` |
| `msdyn_flow_actionapprovalmodel_SyncErrors` | [msdyn_flow_actionapprovalmodel](msdyn_flow_actionapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_actionapprovalmodel` |
| `msdyn_flow_approval_SyncErrors` | [msdyn_flow_approval](msdyn_flow_approval.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approval` |
| `msdyn_flow_approvalrequest_SyncErrors` | [msdyn_flow_approvalrequest](msdyn_flow_approvalrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalrequest` |
| `msdyn_flow_approvalresponse_SyncErrors` | [msdyn_flow_approvalresponse](msdyn_flow_approvalresponse.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalresponse` |
| `msdyn_flow_approvalstep_SyncErrors` | [msdyn_flow_approvalstep](msdyn_flow_approvalstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalstep` |
| `msdyn_flow_awaitallactionapprovalmodel_SyncErrors` | [msdyn_flow_awaitallactionapprovalmodel](msdyn_flow_awaitallactionapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_awaitallactionapprovalmodel` |
| `msdyn_flow_awaitallapprovalmodel_SyncErrors` | [msdyn_flow_awaitallapprovalmodel](msdyn_flow_awaitallapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_awaitallapprovalmodel` |
| `msdyn_flow_basicapprovalmodel_SyncErrors` | [msdyn_flow_basicapprovalmodel](msdyn_flow_basicapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_basicapprovalmodel` |
| `msdyn_flow_flowapproval_SyncErrors` | [msdyn_flow_flowapproval](msdyn_flow_flowapproval.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_flowapproval` |
| `msdyn_formmapping_SyncErrors` | [msdyn_formmapping](msdyn_formmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_formmapping` |
| `msdyn_function_SyncErrors` | [msdyn_function](msdyn_function.md) | `regardingobjectid` | `regardingobjectid_msdyn_function` |
| `msdyn_helppage_SyncErrors` | [msdyn_helppage](msdyn_helppage.md) | `regardingobjectid` | `regardingobjectid_msdyn_helppage` |
| `msdyn_historicalcaseharvestbatch_SyncErrors` | [msdyn_historicalcaseharvestbatch](msdyn_historicalcaseharvestbatch.md) | `regardingobjectid` | `regardingobjectid_msdyn_historicalcaseharvestbatch` |
| `msdyn_historicalcaseharvestrun_SyncErrors` | [msdyn_historicalcaseharvestrun](msdyn_historicalcaseharvestrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_historicalcaseharvestrun` |
| `msdyn_insightsstorevirtualentity_SyncErrors` | [msdyn_insightsstorevirtualentity](msdyn_insightsstorevirtualentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_insightsstorevirtualentity` |
| `msdyn_integratedsearchprovider_SyncErrors` | [msdyn_integratedsearchprovider](msdyn_integratedsearchprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_integratedsearchprovider` |
| `msdyn_kalanguagesetting_SyncErrors` | [msdyn_kalanguagesetting](msdyn_kalanguagesetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_kalanguagesetting` |
| `msdyn_kbattachment_SyncErrors` | [msdyn_kbattachment](msdyn_kbattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_kbattachment` |
| `msdyn_kmfederatedsearchconfig_SyncErrors` | [msdyn_kmfederatedsearchconfig](msdyn_kmfederatedsearchconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_kmfederatedsearchconfig` |
| `msdyn_kmpersonalizationsetting_SyncErrors` | [msdyn_kmpersonalizationsetting](msdyn_kmpersonalizationsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_kmpersonalizationsetting` |
| `msdyn_knowledgearticleimage_SyncErrors` | [msdyn_knowledgearticleimage](msdyn_knowledgearticleimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticleimage` |
| `msdyn_knowledgearticletemplate_SyncErrors` | [msdyn_knowledgearticletemplate](msdyn_knowledgearticletemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticletemplate` |
| `msdyn_knowledgeassetconfiguration_SyncErrors` | [msdyn_knowledgeassetconfiguration](msdyn_knowledgeassetconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeassetconfiguration` |
| `msdyn_knowledgeconfiguration_SyncErrors` | [msdyn_knowledgeconfiguration](msdyn_knowledgeconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeconfiguration` |
| `msdyn_knowledgeharvestjobrecord_SyncErrors` | [msdyn_knowledgeharvestjobrecord](msdyn_knowledgeharvestjobrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeharvestjobrecord` |
| `msdyn_knowledgeinteractioninsight_SyncErrors` | [msdyn_knowledgeinteractioninsight](msdyn_knowledgeinteractioninsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeinteractioninsight` |
| `msdyn_knowledgemanagementsetting_SyncErrors` | [msdyn_knowledgemanagementsetting](msdyn_knowledgemanagementsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgemanagementsetting` |
| `msdyn_knowledgepersonalfilter_SyncErrors` | [msdyn_knowledgepersonalfilter](msdyn_knowledgepersonalfilter.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgepersonalfilter` |
| `msdyn_knowledgesearchfilter_SyncErrors` | [msdyn_knowledgesearchfilter](msdyn_knowledgesearchfilter.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgesearchfilter` |
| `msdyn_knowledgesearchinsight_SyncErrors` | [msdyn_knowledgesearchinsight](msdyn_knowledgesearchinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgesearchinsight` |
| `msdyn_mobileapp_SyncErrors` | [msdyn_mobileapp](msdyn_mobileapp.md) | `regardingobjectid` | `regardingobjectid_msdyn_mobileapp` |
| `msdyn_modulerundetail_SyncErrors` | [msdyn_modulerundetail](msdyn_modulerundetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_modulerundetail` |
| `msdyn_pmanalysishistory_SyncErrors` | [msdyn_pmanalysishistory](msdyn_pmanalysishistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmanalysishistory` |
| `msdyn_pmbusinessruleautomationconfig_SyncErrors` | [msdyn_pmbusinessruleautomationconfig](msdyn_pmbusinessruleautomationconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmbusinessruleautomationconfig` |
| `msdyn_pmcalendar_SyncErrors` | [msdyn_pmcalendar](msdyn_pmcalendar.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmcalendar` |
| `msdyn_pmcalendarversion_SyncErrors` | [msdyn_pmcalendarversion](msdyn_pmcalendarversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmcalendarversion` |
| `msdyn_pminferredtask_SyncErrors` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `regardingobjectid` | `regardingobjectid_msdyn_pminferredtask` |
| `msdyn_pmprocessextendedmetadataversion_SyncErrors` | [msdyn_pmprocessextendedmetadataversion](msdyn_pmprocessextendedmetadataversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessextendedmetadataversion` |
| `msdyn_pmprocesstemplate_SyncErrors` | [msdyn_pmprocesstemplate](msdyn_pmprocesstemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocesstemplate` |
| `msdyn_pmprocessusersettings_SyncErrors` | [msdyn_pmprocessusersettings](msdyn_pmprocessusersettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessusersettings` |
| `msdyn_pmprocessversion_SyncErrors` | [msdyn_pmprocessversion](msdyn_pmprocessversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessversion` |
| `msdyn_pmrecording_SyncErrors` | [msdyn_pmrecording](msdyn_pmrecording.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmrecording` |
| `msdyn_pmsimulation_SyncErrors` | [msdyn_pmsimulation](msdyn_pmsimulation.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmsimulation` |
| `msdyn_pmtab_SyncErrors` | [msdyn_pmtab](msdyn_pmtab.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmtab` |
| `msdyn_pmtemplate_SyncErrors` | [msdyn_pmtemplate](msdyn_pmtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmtemplate` |
| `msdyn_pmview_SyncErrors` | [msdyn_pmview](msdyn_pmview.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmview` |
| `msdyn_qna_SyncErrors` | [msdyn_qna](msdyn_qna.md) | `regardingobjectid` | `regardingobjectid_msdyn_qna` |
| `msdyn_richtextfile_SyncErrors` | [msdyn_richtextfile](msdyn_richtextfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_richtextfile` |
| `msdyn_salesforcestructuredobject_SyncErrors` | [msdyn_salesforcestructuredobject](msdyn_salesforcestructuredobject.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesforcestructuredobject` |
| `msdyn_salesforcestructuredqnaconfig_SyncErrors` | [msdyn_salesforcestructuredqnaconfig](msdyn_salesforcestructuredqnaconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesforcestructuredqnaconfig` |
| `msdyn_schedule_SyncErrors` | [msdyn_schedule](msdyn_schedule.md) | `regardingobjectid` | `regardingobjectid_msdyn_schedule` |
| `msdyn_serviceconfiguration_SyncErrors` | [msdyn_serviceconfiguration](msdyn_serviceconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_serviceconfiguration` |
| `msdyn_slakpi_SyncErrors` | [msdyn_slakpi](msdyn_slakpi.md) | `regardingobjectid` | `regardingobjectid_msdyn_slakpi` |
| `msdyn_solutionhealthrule_SyncErrors` | [msdyn_solutionhealthrule](msdyn_solutionhealthrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthrule` |
| `msdyn_solutionhealthruleargument_SyncErrors` | [msdyn_solutionhealthruleargument](msdyn_solutionhealthruleargument.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthruleargument` |
| `msdyn_solutionhealthruleset_SyncErrors` | [msdyn_solutionhealthruleset](msdyn_solutionhealthruleset.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthruleset` |
| `msdyn_tour_SyncErrors` | [msdyn_tour](msdyn_tour.md) | `regardingobjectid` | `regardingobjectid_msdyn_tour` |
| `msdyn_virtualtablecolumncandidate_SyncErrors` | [msdyn_virtualtablecolumncandidate](msdyn_virtualtablecolumncandidate.md) | `regardingobjectid` | `regardingobjectid_msdyn_virtualtablecolumncandidate` |
| `msdyn_workflowactionstatus_SyncErrors` | [msdyn_workflowactionstatus](msdyn_workflowactionstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_workflowactionstatus` |
| `msdynce_botcontent_SyncErrors` | [msdynce_botcontent](msdynce_botcontent.md) | `regardingobjectid` | `regardingobjectid_msdynce_botcontent` |
| `msgraphresourcetosubscription_SyncErrors` | [msgraphresourcetosubscription](msgraphresourcetosubscription.md) | `regardingobjectid` | `regardingobjectid_msgraphresourcetosubscription` |
| `mspcat_catalogsubmissionfiles_SyncErrors` | [mspcat_catalogsubmissionfiles](mspcat_catalogsubmissionfiles.md) | `regardingobjectid` | `regardingobjectid_mspcat_catalogsubmissionfiles` |
| `mspcat_packagestore_SyncErrors` | [mspcat_packagestore](mspcat_packagestore.md) | `regardingobjectid` | `regardingobjectid_mspcat_packagestore` |
| `NewProcess_SyncErrors` | [newprocess](newprocess.md) | `regardingobjectid` | `regardingobjectid_NewProcess_syncerror` |
| `Organization_SyncErrors` | [organization](organization.md) | `regardingobjectid` | `regardingobjectid_organization_syncerror` |
| `organizationdatasyncfnostate_SyncErrors` | [organizationdatasyncfnostate](organizationdatasyncfnostate.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncfnostate` |
| `organizationdatasyncstate_SyncErrors` | [organizationdatasyncstate](organizationdatasyncstate.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncstate` |
| `organizationdatasyncsubscription_SyncErrors` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscription` |
| `organizationdatasyncsubscriptionentity_SyncErrors` | [organizationdatasyncsubscriptionentity](organizationdatasyncsubscriptionentity.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscriptionentity` |
| `organizationdatasyncsubscriptionfnotable_SyncErrors` | [organizationdatasyncsubscriptionfnotable](organizationdatasyncsubscriptionfnotable.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscriptionfnotable` |
| `owner_SyncError` | [owner](owner.md) | `ownerid` | `ownerid` |
| `package_SyncErrors` | [package](package.md) | `regardingobjectid` | `regardingobjectid_package` |
| `packagehistory_SyncErrors` | [packagehistory](packagehistory.md) | `regardingobjectid` | `regardingobjectid_packagehistory` |
| `PhoneCall_SyncErrors` | [phonecall](phonecall.md) | `regardingobjectid` | `regardingobjectid_phonecall_syncerror` |
| `plannerbusinessscenario_SyncErrors` | [plannerbusinessscenario](plannerbusinessscenario.md) | `regardingobjectid` | `regardingobjectid_plannerbusinessscenario` |
| `plannersyncaction_SyncErrors` | [plannersyncaction](plannersyncaction.md) | `regardingobjectid` | `regardingobjectid_plannersyncaction` |
| `plugin_SyncErrors` | [plugin](plugin.md) | `regardingobjectid` | `regardingobjectid_plugin` |
| `pluginpackage_SyncErrors` | [pluginpackage](pluginpackage.md) | `regardingobjectid` | `regardingobjectid_pluginpackage` |
| `Position_SyncErrors` | [position](position.md) | `regardingobjectid` | `regardingobjectid_position_syncerror` |
| `PostFollow_SyncErrors` | [postfollow](postfollow.md) | `regardingobjectid` | `regardingobjectid_postfollow_syncerror` |
| `powerbidataset_SyncErrors` | [powerbidataset](powerbidataset.md) | `regardingobjectid` | `regardingobjectid_powerbidataset` |
| `powerbidatasetapdx_SyncErrors` | [powerbidatasetapdx](powerbidatasetapdx.md) | `regardingobjectid` | `regardingobjectid_powerbidatasetapdx` |
| `powerbimashupparameter_SyncErrors` | [powerbimashupparameter](powerbimashupparameter.md) | `regardingobjectid` | `regardingobjectid_powerbimashupparameter` |
| `powerbireport_SyncErrors` | [powerbireport](powerbireport.md) | `regardingobjectid` | `regardingobjectid_powerbireport` |
| `powerbireportapdx_SyncErrors` | [powerbireportapdx](powerbireportapdx.md) | `regardingobjectid` | `regardingobjectid_powerbireportapdx` |
| `powerfxrule_SyncErrors` | [powerfxrule](powerfxrule.md) | `regardingobjectid` | `regardingobjectid_powerfxrule` |
| `powerpagecomponent_SyncErrors` | [powerpagecomponent](powerpagecomponent.md) | `regardingobjectid` | `regardingobjectid_powerpagecomponent` |
| `powerpagesddosalert_SyncErrors` | [powerpagesddosalert](powerpagesddosalert.md) | `regardingobjectid` | `regardingobjectid_powerpagesddosalert` |
| `powerpagesite_SyncErrors` | [powerpagesite](powerpagesite.md) | `regardingobjectid` | `regardingobjectid_powerpagesite` |
| `powerpagesitelanguage_SyncErrors` | [powerpagesitelanguage](powerpagesitelanguage.md) | `regardingobjectid` | `regardingobjectid_powerpagesitelanguage` |
| `powerpagesitepublished_SyncErrors` | [powerpagesitepublished](powerpagesitepublished.md) | `regardingobjectid` | `regardingobjectid_powerpagesitepublished` |
| `powerpagesmanagedidentity_SyncErrors` | [powerpagesmanagedidentity](powerpagesmanagedidentity.md) | `regardingobjectid` | `regardingobjectid_powerpagesmanagedidentity` |
| `powerpagesscanreport_SyncErrors` | [powerpagesscanreport](powerpagesscanreport.md) | `regardingobjectid` | `regardingobjectid_powerpagesscanreport` |
| `powerpagessourcefile_SyncErrors` | [powerpagessourcefile](powerpagessourcefile.md) | `regardingobjectid` | `regardingobjectid_powerpagessourcefile` |
| `privilegecheckerlog_SyncErrors` | [privilegecheckerlog](privilegecheckerlog.md) | `regardingobjectid` | `regardingobjectid_privilegecheckerlog` |
| `privilegecheckerrun_SyncErrors` | [privilegecheckerrun](privilegecheckerrun.md) | `regardingobjectid` | `regardingobjectid_privilegecheckerrun` |
| `privilegesremovalsetting_SyncErrors` | [privilegesremovalsetting](privilegesremovalsetting.md) | `regardingobjectid` | `regardingobjectid_privilegesremovalsetting` |
| `ProcessSession_SyncErrors` | [processsession](processsession.md) | `regardingobjectid` | `regardingobjectid_processsession_syncerror` |
| `ProcessStage_SyncErrors` | [processstage](processstage.md) | `regardingobjectid` | `regardingobjectid_processstage_syncerror` |
| `processstageparameter_SyncErrors` | [processstageparameter](processstageparameter.md) | `regardingobjectid` | `regardingobjectid_processstageparameter` |
| `ProcessTrigger_SyncErrors` | [processtrigger](processtrigger.md) | `regardingobjectid` | `regardingobjectid_processtrigger_syncerror` |
| `provisionlanguageforuser_SyncErrors` | [provisionlanguageforuser](provisionlanguageforuser.md) | `regardingobjectid` | `regardingobjectid_provisionlanguageforuser` |
| `Publisher_SyncErrors` | [publisher](publisher.md) | `regardingobjectid` | `regardingobjectid_publisher_syncerror` |
| `purviewlabelinfo_SyncErrors` | [purviewlabelinfo](purviewlabelinfo.md) | `regardingobjectid` | `regardingobjectid_purviewlabelinfo` |
| `Queue_SyncErrors` | [queue](queue.md) | `regardingobjectid` | `regardingobjectid_queue_syncerror` |
| `QueueItem_SyncErrors` | [queueitem](queueitem.md) | `regardingobjectid` | `regardingobjectid_queueitem_syncerror` |
| `recordfilter_SyncErrors` | [recordfilter](recordfilter.md) | `regardingobjectid` | `regardingobjectid_recordfilter` |
| `RecurringAppointmentMaster_SyncErrors` | [recurringappointmentmaster](recurringappointmentmaster.md) | `regardingobjectid` | `regardingobjectid_recurringappointmentmaster_syncerror` |
| `recyclebinconfig_SyncErrors` | [recyclebinconfig](recyclebinconfig.md) | `regardingobjectid` | `regardingobjectid_recyclebinconfig` |
| `relationshipattribute_SyncErrors` | [relationshipattribute](relationshipattribute.md) | `regardingobjectid` | `regardingobjectid_relationshipattribute` |
| `Report_SyncErrors` | [report](report.md) | `regardingobjectid` | `regardingobjectid_report_syncerror` |
| `ReportCategory_SyncErrors` | [reportcategory](reportcategory.md) | `regardingobjectid` | `regardingobjectid_reportcategory_syncerror` |
| `reportparameter_SyncErrors` | [reportparameter](reportparameter.md) | `regardingobjectid` | `regardingobjectid_reportparameter` |
| `retaineddataexcel_SyncErrors` | [retaineddataexcel](retaineddataexcel.md) | `regardingobjectid` | `regardingobjectid_retaineddataexcel` |
| `retentionconfig_SyncErrors` | [retentionconfig](retentionconfig.md) | `regardingobjectid` | `regardingobjectid_retentionconfig` |
| `retentionfailuredetail_SyncErrors` | [retentionfailuredetail](retentionfailuredetail.md) | `regardingobjectid` | `regardingobjectid_retentionfailuredetail` |
| `retentionoperation_SyncErrors` | [retentionoperation](retentionoperation.md) | `regardingobjectid` | `regardingobjectid_retentionoperation` |
| `retentionoperationdetail_SyncErrors` | [retentionoperationdetail](retentionoperationdetail.md) | `regardingobjectid` | `regardingobjectid_retentionoperationdetail` |
| `retentionsuccessdetail_SyncErrors` | [retentionsuccessdetail](retentionsuccessdetail.md) | `regardingobjectid` | `regardingobjectid_retentionsuccessdetail` |
| `Role_SyncErrors` | [role](role.md) | `regardingobjectid` | `regardingobjectid_role_syncerror` |
| `roleeditorlayout_SyncErrors` | [roleeditorlayout](roleeditorlayout.md) | `regardingobjectid` | `regardingobjectid_roleeditorlayout` |
| `RollupField_SyncErrors` | [rollupfield](rollupfield.md) | `regardingobjectid` | `regardingobjectid_rollupfield_syncerror` |
| `sa_suggestedaction_SyncErrors` | [sa_suggestedaction](sa_suggestedaction.md) | `regardingobjectid` | `regardingobjectid_sa_suggestedaction` |
| `sa_suggestedactioncriteria_SyncErrors` | [sa_suggestedactioncriteria](sa_suggestedactioncriteria.md) | `regardingobjectid` | `regardingobjectid_sa_suggestedactioncriteria` |
| `SavedQuery_SyncErrors` | [savedquery](savedquery.md) | `regardingobjectid` | `regardingobjectid_savedquery_syncerror` |
| `SavedQueryVisualization_SyncErrors` | [savedqueryvisualization](savedqueryvisualization.md) | `regardingobjectid` | `regardingobjectid_savedqueryvisualization_syncerror` |
| `savingrule_SyncErrors` | [savingrule](savingrule.md) | `regardingobjectid` | `regardingobjectid_savingrule` |
| `searchattributesettings_SyncErrors` | [searchattributesettings](searchattributesettings.md) | `regardingobjectid` | `regardingobjectid_searchattributesettings` |
| `searchcustomanalyzer_SyncErrors` | [searchcustomanalyzer](searchcustomanalyzer.md) | `regardingobjectid` | `regardingobjectid_searchcustomanalyzer` |
| `searchrelationshipsettings_SyncErrors` | [searchrelationshipsettings](searchrelationshipsettings.md) | `regardingobjectid` | `regardingobjectid_searchrelationshipsettings` |
| `sensitivitylabelattributemapping_SyncErrors` | [sensitivitylabelattributemapping](sensitivitylabelattributemapping.md) | `regardingobjectid` | `regardingobjectid_sensitivitylabelattributemapping` |
| `serviceplan_SyncErrors` | [serviceplan](serviceplan.md) | `regardingobjectid` | `regardingobjectid_serviceplan` |
| `serviceplanmapping_SyncErrors` | [serviceplanmapping](serviceplanmapping.md) | `regardingobjectid` | `regardingobjectid_serviceplanmapping` |
| `sharedlinksetting_SyncErrors` | [sharedlinksetting](sharedlinksetting.md) | `regardingobjectid` | `regardingobjectid_sharedlinksetting` |
| `sharedobject_SyncErrors` | [sharedobject](sharedobject.md) | `regardingobjectid` | `regardingobjectid_sharedobject` |
| `sharedworkspace_SyncErrors` | [sharedworkspace](sharedworkspace.md) | `regardingobjectid` | `regardingobjectid_sharedworkspace` |
| `sharedworkspacepool_SyncErrors` | [sharedworkspacepool](sharedworkspacepool.md) | `regardingobjectid` | `regardingobjectid_sharedworkspacepool` |
| `SharePointDocumentLocation_SyncErrors` | [sharepointdocumentlocation](sharepointdocumentlocation.md) | `regardingobjectid` | `regardingobjectid_sharepointdocumentlocation_syncerror` |
| `sharepointmanagedidentity_SyncErrors` | [sharepointmanagedidentity](sharepointmanagedidentity.md) | `regardingobjectid` | `regardingobjectid_sharepointmanagedidentity` |
| `SharePointSite_SyncErrors` | [sharepointsite](sharepointsite.md) | `regardingobjectid` | `regardingobjectid_sharepointsite_syncerror` |
| `sideloadedaiplugin_SyncErrors` | [sideloadedaiplugin](sideloadedaiplugin.md) | `regardingobjectid` | `regardingobjectid_sideloadedaiplugin` |
| `SLA_SyncErrors` | [sla](sla.md) | `regardingobjectid` | `regardingobjectid_sla_syncerror` |
| `SLAItem_SyncErrors` | [slaitem](slaitem.md) | `regardingobjectid` | `regardingobjectid_slaitem_syncerror` |
| `SLAKPIInstance_SyncErrors` | [slakpiinstance](slakpiinstance.md) | `regardingobjectid` | `regardingobjectid_slakpiinstance_syncerror` |
| `SocialActivity_SyncErrors` | [socialactivity](socialactivity.md) | `regardingobjectid` | `regardingobjectid_socialactivity_syncerror` |
| `SocialProfile_SyncErrors` | [socialprofile](socialprofile.md) | `regardingobjectid` | `regardingobjectid_socialprofile_syncerror` |
| `Solution_SyncErrors` | [solution](solution.md) | `regardingobjectid` | `regardingobjectid_solution_syncerror` |
| `solutioncomponentattributeconfiguration_SyncErrors` | [solutioncomponentattributeconfiguration](solutioncomponentattributeconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentattributeconfiguration` |
| `solutioncomponentbatchconfiguration_SyncErrors` | [solutioncomponentbatchconfiguration](solutioncomponentbatchconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentbatchconfiguration` |
| `solutioncomponentconfiguration_SyncErrors` | [solutioncomponentconfiguration](solutioncomponentconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentconfiguration` |
| `solutioncomponentrelationshipconfiguration_SyncErrors` | [solutioncomponentrelationshipconfiguration](solutioncomponentrelationshipconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentrelationshipconfiguration` |
| `stagedentity_SyncErrors` | [stagedentity](stagedentity.md) | `regardingobjectid` | `regardingobjectid_stagedentity` |
| `stagedentityattribute_SyncErrors` | [stagedentityattribute](stagedentityattribute.md) | `regardingobjectid` | `regardingobjectid_stagedentityattribute` |
| `stagedmetadataasyncoperation_SyncErrors` | [stagedmetadataasyncoperation](stagedmetadataasyncoperation.md) | `regardingobjectid` | `regardingobjectid_stagedmetadataasyncoperation` |
| `stagesolutionupload_SyncErrors` | [stagesolutionupload](stagesolutionupload.md) | `regardingobjectid` | `regardingobjectid_stagesolutionupload` |
| `Subject_SyncErrors` | [subject](subject.md) | `regardingobjectid` | `regardingobjectid_subject_syncerror` |
| `supportusertable_SyncErrors` | [supportusertable](supportusertable.md) | `regardingobjectid` | `regardingobjectid_supportusertable` |
| `synapsedatabase_SyncErrors` | [synapsedatabase](synapsedatabase.md) | `regardingobjectid` | `regardingobjectid_synapsedatabase` |
| `synapselinkexternaltablestate_SyncErrors` | [synapselinkexternaltablestate](synapselinkexternaltablestate.md) | `regardingobjectid` | `regardingobjectid_synapselinkexternaltablestate` |
| `synapselinkprofile_SyncErrors` | [synapselinkprofile](synapselinkprofile.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofile` |
| `synapselinkprofileentity_SyncErrors` | [synapselinkprofileentity](synapselinkprofileentity.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofileentity` |
| `synapselinkprofileentitystate_SyncErrors` | [synapselinkprofileentitystate](synapselinkprofileentitystate.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofileentitystate` |
| `synapselinkschedule_SyncErrors` | [synapselinkschedule](synapselinkschedule.md) | `regardingobjectid` | `regardingobjectid_synapselinkschedule` |
| `SyncError_SyncErrors` | [syncerror](syncerror.md) | `regardingobjectid` | `regardingobjectid_syncerror_syncerror` |
| `SystemUser_SyncError` | [systemuser](systemuser.md) | `owninguser` | `regardingobjectid_systemuser` |
| `SystemUser_SyncErrors` | [systemuser](systemuser.md) | `regardingobjectid` | `regardingobjectid_systemuser_syncerror` |
| `systemuserauthorizationchangetracker_SyncErrors` | [systemuserauthorizationchangetracker](systemuserauthorizationchangetracker.md) | `regardingobjectid` | `regardingobjectid_systemuserauthorizationchangetracker` |
| `tag_SyncErrors` | [tag](tag.md) | `regardingobjectid` | `regardingobjectid_tag` |
| `taggedflowsession_SyncErrors` | [taggedflowsession](taggedflowsession.md) | `regardingobjectid` | `regardingobjectid_taggedflowsession` |
| `taggedprocess_SyncErrors` | [taggedprocess](taggedprocess.md) | `regardingobjectid` | `regardingobjectid_taggedprocess` |
| `Task_SyncErrors` | [task](task.md) | `regardingobjectid` | `regardingobjectid_task_syncerror` |
| `team_SyncError` | [team](team.md) | `owningteam` | `owningteam` |
| `Team_SyncErrors` | [team](team.md) | `regardingobjectid` | `regardingobjectid_team_syncerror` |
| `teammobileofflineprofilemembership_SyncErrors` | [teammobileofflineprofilemembership](teammobileofflineprofilemembership.md) | `regardingobjectid` | `regardingobjectid_teammobileofflineprofilemembership` |
| `TeamTemplate_SyncErrors` | [teamtemplate](teamtemplate.md) | `regardingobjectid` | `regardingobjectid_teamtemplate_syncerror` |
| `Template_SyncErrors` | [template](template.md) | `regardingobjectid` | `regardingobjectid_template_syncerror` |
| `Territory_SyncErrors` | [territory](territory.md) | `regardingobjectid` | `regardingobjectid_territory_syncerror` |
| `TransactionCurrency_SyncErrors` | [transactioncurrency](transactioncurrency.md) | `regardingobjectid` | `regardingobjectid_transactioncurrency_syncerror` |
| `TranslationProcess_SyncErrors` | [translationprocess](translationprocess.md) | `regardingobjectid` | `regardingobjectid_TranslationProcess_syncerror` |
| `unstructuredfilesearchentity_SyncErrors` | [unstructuredfilesearchentity](unstructuredfilesearchentity.md) | `regardingobjectid` | `regardingobjectid_unstructuredfilesearchentity` |
| `unstructuredfilesearchrecord_SyncErrors` | [unstructuredfilesearchrecord](unstructuredfilesearchrecord.md) | `regardingobjectid` | `regardingobjectid_unstructuredfilesearchrecord` |
| `usermobileofflineprofilemembership_SyncErrors` | [usermobileofflineprofilemembership](usermobileofflineprofilemembership.md) | `regardingobjectid` | `regardingobjectid_usermobileofflineprofilemembership` |
| `UserQuery_SyncErrors` | [userquery](userquery.md) | `regardingobjectid` | `regardingobjectid_userquery_syncerror` |
| `UserQueryVisualization_SyncErrors` | [userqueryvisualization](userqueryvisualization.md) | `regardingobjectid` | `regardingobjectid_userqueryvisualization_syncerror` |
| `userrating_SyncErrors` | [userrating](userrating.md) | `regardingobjectid` | `regardingobjectid_userrating` |
| `viewasexamplequestion_SyncErrors` | [viewasexamplequestion](viewasexamplequestion.md) | `regardingobjectid` | `regardingobjectid_viewasexamplequestion` |
| `virtualentitymetadata_SyncErrors` | [virtualentitymetadata](virtualentitymetadata.md) | `regardingobjectid` | `regardingobjectid_virtualentitymetadata` |
| `Workflow_SyncErrors` | [workflow](workflow.md) | `regardingobjectid` | `regardingobjectid_workflow_syncerror` |
| `workflowbinary_SyncErrors` | [workflowbinary](workflowbinary.md) | `regardingobjectid` | `regardingobjectid_workflowbinary` |
| `workflowmetadata_SyncErrors` | [workflowmetadata](workflowmetadata.md) | `regardingobjectid` | `regardingobjectid_workflowmetadata` |
| `workqueue_SyncErrors` | [workqueue](workqueue.md) | `regardingobjectid` | `regardingobjectid_workqueue` |
| `workqueueitem_SyncErrors` | [workqueueitem](workqueueitem.md) | `regardingobjectid` | `regardingobjectid_workqueueitem` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `SyncError_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [syncerror.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/syncerror.md) on 2026-05-06.