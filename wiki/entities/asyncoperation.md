---
logical: "asyncoperation"
display: "System Job"
entitySetName: "asyncoperations"
primaryId: "asyncoperationid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# System Job

Process whose execution can proceed independently or in the background.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `asyncoperation` |
| Display name | System Job |
| Display (plural) | System Jobs |
| Schema name | `AsyncOperation` |
| Entity set (Web API) | `asyncoperations` |
| Primary id attribute | `asyncoperationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/asyncoperations?$select=name&$top=10
GET /api/data/v9.2/asyncoperations(<guid>)
POST /api/data/v9.2/asyncoperations
PATCH /api/data/v9.2/asyncoperations(<guid>)
DELETE /api/data/v9.2/asyncoperations(<guid>)
```

## Attributes

Writable: **34** · Read-only: **25**

### Writable

`AsyncOperationId`, `BreadcrumbId`, `CallerOrigin`, `CorrelationId`, `CorrelationUpdatedTime`, `Data`, `DependencyToken`, `Depth`, `ExpanderStartTime`, `FriendlyMessage`, `HostId`, `MessageName`, `Name`, `OperationType`, `OwnerId`, `OwnerIdType`, `OwningExtensionId`, `OwningExtensionTypeCode`, `ParentPluginExecutionId`, `PostponeUntil`, `PrimaryEntityType`, `RecurrencePattern`, `RecurrenceStartTime`, `RegardingObjectId`, `RegardingObjectTypeCode`, `RequestId`, `RetainJobHistory`, `RootExecutionContext`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`, `WorkflowActivationId`, `Workload`

### Read-only

`CompletedOn`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `DataBlobId`, `DataBlobId_Name`, `ErrorCode`, `ExecutionTimeSpan`, `IsWaitingForEvent`, `Message`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `RetryCount`, `Sequence`, `StartedOn`, `Subtype`, `WorkflowIsBlocked`, `WorkflowStageName`, `WorkflowState`

## Relationships

### Many-to-One (386)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Account_AsyncOperations` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account` |
| `activityfileattachment_AsyncOperations` | [activityfileattachment](activityfileattachment.md) | `regardingobjectid` | `regardingobjectid_activityfileattachment` |
| `ActivityMimeAttachment_AsyncOperations` | [activitymimeattachment](activitymimeattachment.md) | `regardingobjectid` | `regardingobjectid_activitymimeattachment` |
| `ActivityPointer_AsyncOperations` | [activitypointer](activitypointer.md) | `regardingobjectid` | `regardingobjectid_activitypointer` |
| `adx_externalidentity_AsyncOperations` | [adx_externalidentity](adx_externalidentity.md) | `regardingobjectid` | `regardingobjectid_adx_externalidentity` |
| `adx_invitation_AsyncOperations` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation` |
| `adx_inviteredemption_AsyncOperations` | [adx_inviteredemption](adx_inviteredemption.md) | `regardingobjectid` | `regardingobjectid_adx_inviteredemption` |
| `adx_portalcomment_AsyncOperations` | [adx_portalcomment](adx_portalcomment.md) | `regardingobjectid` | `regardingobjectid_adx_portalcomment` |
| `adx_setting_AsyncOperations` | [adx_setting](adx_setting.md) | `regardingobjectid` | `regardingobjectid_adx_setting` |
| `adx_webformsession_AsyncOperations` | [adx_webformsession](adx_webformsession.md) | `regardingobjectid` | `regardingobjectid_adx_webformsession` |
| `aicopilot_AsyncOperations` | [aicopilot](aicopilot.md) | `regardingobjectid` | `regardingobjectid_aicopilot` |
| `aiplugin_AsyncOperations` | [aiplugin](aiplugin.md) | `regardingobjectid` | `regardingobjectid_aiplugin` |
| `aipluginauth_AsyncOperations` | [aipluginauth](aipluginauth.md) | `regardingobjectid` | `regardingobjectid_aipluginauth` |
| `aipluginconversationstarter_AsyncOperations` | [aipluginconversationstarter](aipluginconversationstarter.md) | `regardingobjectid` | `regardingobjectid_aipluginconversationstarter` |
| `aipluginconversationstartermapping_AsyncOperations` | [aipluginconversationstartermapping](aipluginconversationstartermapping.md) | `regardingobjectid` | `regardingobjectid_aipluginconversationstartermapping` |
| `aipluginexternalschema_AsyncOperations` | [aipluginexternalschema](aipluginexternalschema.md) | `regardingobjectid` | `regardingobjectid_aipluginexternalschema` |
| `aipluginexternalschemaproperty_AsyncOperations` | [aipluginexternalschemaproperty](aipluginexternalschemaproperty.md) | `regardingobjectid` | `regardingobjectid_aipluginexternalschemaproperty` |
| `aiplugingovernance_AsyncOperations` | [aiplugingovernance](aiplugingovernance.md) | `regardingobjectid` | `regardingobjectid_aiplugingovernance` |
| `aiplugingovernanceext_AsyncOperations` | [aiplugingovernanceext](aiplugingovernanceext.md) | `regardingobjectid` | `regardingobjectid_aiplugingovernanceext` |
| `aiplugininstance_AsyncOperations` | [aiplugininstance](aiplugininstance.md) | `regardingobjectid` | `regardingobjectid_aiplugininstance` |
| `aipluginoperation_AsyncOperations` | [aipluginoperation](aipluginoperation.md) | `regardingobjectid` | `regardingobjectid_aipluginoperation` |
| `aipluginoperationparameter_AsyncOperations` | [aipluginoperationparameter](aipluginoperationparameter.md) | `regardingobjectid` | `regardingobjectid_aipluginoperationparameter` |
| `aipluginoperationresponsetemplate_AsyncOperations` | [aipluginoperationresponsetemplate](aipluginoperationresponsetemplate.md) | `regardingobjectid` | `regardingobjectid_aipluginoperationresponsetemplate` |
| `aiplugintitle_AsyncOperations` | [aiplugintitle](aiplugintitle.md) | `regardingobjectid` | `regardingobjectid_aiplugintitle` |
| `aipluginusersetting_AsyncOperations` | [aipluginusersetting](aipluginusersetting.md) | `regardingobjectid` | `regardingobjectid_aipluginusersetting` |
| `allowedmcpclient_AsyncOperations` | [allowedmcpclient](allowedmcpclient.md) | `regardingobjectid` | `regardingobjectid_allowedmcpclient` |
| `Annotation_AsyncOperations` | [annotation](annotation.md) | `regardingobjectid` | `regardingobjectid_annotation` |
| `AnnualFiscalCalendar_AsyncOperations` | [annualfiscalcalendar](annualfiscalcalendar.md) | `regardingobjectid` | `regardingobjectid_annualfiscalcalendar` |
| `appaction_AsyncOperations` | [appaction](appaction.md) | `regardingobjectid` | `regardingobjectid_appaction` |
| `appactionmigration_AsyncOperations` | [appactionmigration](appactionmigration.md) | `regardingobjectid` | `regardingobjectid_appactionmigration` |
| `appactionrule_AsyncOperations` | [appactionrule](appactionrule.md) | `regardingobjectid` | `regardingobjectid_appactionrule` |
| `application_AsyncOperations` | [application](application.md) | `regardingobjectid` | `regardingobjectid_application` |
| `applicationuser_AsyncOperations` | [applicationuser](applicationuser.md) | `regardingobjectid` | `regardingobjectid_applicationuser` |
| `Appointment_AsyncOperations` | [appointment](appointment.md) | `regardingobjectid` | `regardingobjectid_appointment` |
| `approvalprocess_AsyncOperations` | [approvalprocess](approvalprocess.md) | `regardingobjectid` | `regardingobjectid_approvalprocess` |
| `approvalstageapproval_AsyncOperations` | [approvalstageapproval](approvalstageapproval.md) | `regardingobjectid` | `regardingobjectid_approvalstageapproval` |
| `approvalstagecondition_AsyncOperations` | [approvalstagecondition](approvalstagecondition.md) | `regardingobjectid` | `regardingobjectid_approvalstagecondition` |
| `approvalstageintelligent_AsyncOperations` | [approvalstageintelligent](approvalstageintelligent.md) | `regardingobjectid` | `regardingobjectid_approvalstageintelligent` |
| `approvalstageorder_AsyncOperations` | [approvalstageorder](approvalstageorder.md) | `regardingobjectid` | `regardingobjectid_approvalstageorder` |
| `attributeclusterconfig_AsyncOperations` | [attributeclusterconfig](attributeclusterconfig.md) | `regardingobjectid` | `regardingobjectid_attributeclusterconfig` |
| `attributeimageconfig_AsyncOperations` | [attributeimageconfig](attributeimageconfig.md) | `regardingobjectid` | `regardingobjectid_attributeimageconfig` |
| `attributemaskingrule_AsyncOperations` | [attributemaskingrule](attributemaskingrule.md) | `regardingobjectid` | `regardingobjectid_attributemaskingrule` |
| `attributepicklistvalue_AsyncOperations` | [attributepicklistvalue](attributepicklistvalue.md) | `regardingobjectid` | `regardingobjectid_attributepicklistvalue` |
| `bot_AsyncOperations` | [bot](bot.md) | `regardingobjectid` | `regardingobjectid_bot` |
| `botcomponent_AsyncOperations` | [botcomponent](botcomponent.md) | `regardingobjectid` | `regardingobjectid_botcomponent` |
| `botcomponentcollection_AsyncOperations` | [botcomponentcollection](botcomponentcollection.md) | `regardingobjectid` | `regardingobjectid_botcomponentcollection` |
| `business_unit_asyncoperation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `businessprocess_AsyncOperations` | [businessprocess](businessprocess.md) | `regardingobjectid` | `regardingobjectid_businessprocess` |
| `BusinessUnit_AsyncOperations` | [businessunit](businessunit.md) | `regardingobjectid` | `regardingobjectid_businessunit` |
| `BusinessUnitNewsArticle_AsyncOperations` | [businessunitnewsarticle](businessunitnewsarticle.md) | `regardingobjectid` | `regardingobjectid_businessunitnewsarticle` |
| `Calendar_AsyncOperations` | [calendar](calendar.md) | `regardingobjectid` | `regardingobjectid_calendar` |
| `card_AsyncOperations` | [card](card.md) | `regardingobjectid` | `regardingobjectid_card` |
| `catalog_AsyncOperations` | [catalog](catalog.md) | `regardingobjectid` | `regardingobjectid_catalog` |
| `catalogassignment_AsyncOperations` | [catalogassignment](catalogassignment.md) | `regardingobjectid` | `regardingobjectid_catalogassignment` |
| `certificatecredential_AsyncOperations` | [certificatecredential](certificatecredential.md) | `regardingobjectid` | `regardingobjectid_certificatecredential` |
| `chat_AsyncOperations` | [chat](chat.md) | `regardingobjectid` | `regardingobjectid_chat` |
| `Connection_AsyncOperations` | [connection](connection.md) | `regardingobjectid` | `regardingobjectid_connection` |
| `Connection_Role_AsyncOperations` | [connectionrole](connectionrole.md) | `regardingobjectid` | `regardingobjectid_connectionrole` |
| `connectioninstance_AsyncOperations` | [connectioninstance](connectioninstance.md) | `regardingobjectid` | `regardingobjectid_connectioninstance` |
| `connectionreference_AsyncOperations` | [connectionreference](connectionreference.md) | `regardingobjectid` | `regardingobjectid_connectionreference` |
| `connector_AsyncOperations` | [connector](connector.md) | `regardingobjectid` | `regardingobjectid_connector` |
| `Contact_AsyncOperations` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact` |
| `conversationtranscript_AsyncOperations` | [conversationtranscript](conversationtranscript.md) | `regardingobjectid` | `regardingobjectid_conversationtranscript` |
| `copilotexamplequestion_AsyncOperations` | [copilotexamplequestion](copilotexamplequestion.md) | `regardingobjectid` | `regardingobjectid_copilotexamplequestion` |
| `copilotglossaryterm_AsyncOperations` | [copilotglossaryterm](copilotglossaryterm.md) | `regardingobjectid` | `regardingobjectid_copilotglossaryterm` |
| `copilotsynonyms_AsyncOperations` | [copilotsynonyms](copilotsynonyms.md) | `regardingobjectid` | `regardingobjectid_copilotsynonyms` |
| `credential_AsyncOperations` | [credential](credential.md) | `regardingobjectid` | `regardingobjectid_credential` |
| `customapi_AsyncOperations` | [customapi](customapi.md) | `regardingobjectid` | `regardingobjectid_customapi` |
| `customapirequestparameter_AsyncOperations` | [customapirequestparameter](customapirequestparameter.md) | `regardingobjectid` | `regardingobjectid_customapirequestparameter` |
| `customapiresponseproperty_AsyncOperations` | [customapiresponseproperty](customapiresponseproperty.md) | `regardingobjectid` | `regardingobjectid_customapiresponseproperty` |
| `CustomerAddress_AsyncOperations` | [customeraddress](customeraddress.md) | `regardingobjectid` | `regardingobjectid_customeraddress` |
| `datalakefolder_AsyncOperations` | [datalakefolder](datalakefolder.md) | `regardingobjectid` | `regardingobjectid_datalakefolder` |
| `datalakefolderpermission_AsyncOperations` | [datalakefolderpermission](datalakefolderpermission.md) | `regardingobjectid` | `regardingobjectid_datalakefolderpermission` |
| `datalakeworkspace_AsyncOperations` | [datalakeworkspace](datalakeworkspace.md) | `regardingobjectid` | `regardingobjectid_datalakeworkspace` |
| `datalakeworkspacepermission_AsyncOperations` | [datalakeworkspacepermission](datalakeworkspacepermission.md) | `regardingobjectid` | `regardingobjectid_datalakeworkspacepermission` |
| `dataprocessingconfiguration_AsyncOperations` | [dataprocessingconfiguration](dataprocessingconfiguration.md) | `regardingobjectid` | `regardingobjectid_dataprocessingconfiguration` |
| `delegatedauthorization_AsyncOperations` | [delegatedauthorization](delegatedauthorization.md) | `regardingobjectid` | `regardingobjectid_delegatedauthorization` |
| `desktopflowbinary_AsyncOperations` | [desktopflowbinary](desktopflowbinary.md) | `regardingobjectid` | `regardingobjectid_desktopflowbinary` |
| `desktopflowmodule_AsyncOperations` | [desktopflowmodule](desktopflowmodule.md) | `regardingobjectid` | `regardingobjectid_desktopflowmodule` |
| `DisplayString_AsyncOperations` | [displaystring](displaystring.md) | `regardingobjectid` | `regardingobjectid_displaystring` |
| `dvfilesearch_AsyncOperations` | [dvfilesearch](dvfilesearch.md) | `regardingobjectid` | `regardingobjectid_dvfilesearch` |
| `dvfilesearchattribute_AsyncOperations` | [dvfilesearchattribute](dvfilesearchattribute.md) | `regardingobjectid` | `regardingobjectid_dvfilesearchattribute` |
| `dvfilesearchentity_AsyncOperations` | [dvfilesearchentity](dvfilesearchentity.md) | `regardingobjectid` | `regardingobjectid_dvfilesearchentity` |
| `dvtablesearch_AsyncOperations` | [dvtablesearch](dvtablesearch.md) | `regardingobjectid` | `regardingobjectid_dvtablesearch` |
| `dvtablesearchattribute_AsyncOperations` | [dvtablesearchattribute](dvtablesearchattribute.md) | `regardingobjectid` | `regardingobjectid_dvtablesearchattribute` |
| `dvtablesearchentity_AsyncOperations` | [dvtablesearchentity](dvtablesearchentity.md) | `regardingobjectid` | `regardingobjectid_dvtablesearchentity` |
| `Email_AsyncOperations` | [email](email.md) | `regardingobjectid` | `regardingobjectid_email` |
| `emailaddressconfiguration_AsyncOperations` | [emailaddressconfiguration](emailaddressconfiguration.md) | `regardingobjectid` | `regardingobjectid_emailaddressconfiguration` |
| `emailserverprofile_asyncoperations` | [emailserverprofile](emailserverprofile.md) | `regardingobjectid` | `regardingobjectid_emailserverprofile` |
| `entityanalyticsconfig_AsyncOperations` | [entityanalyticsconfig](entityanalyticsconfig.md) | `regardingobjectid` | `regardingobjectid_entityanalyticsconfig` |
| `entityclusterconfig_AsyncOperations` | [entityclusterconfig](entityclusterconfig.md) | `regardingobjectid` | `regardingobjectid_entityclusterconfig` |
| `entityimageconfig_AsyncOperations` | [entityimageconfig](entityimageconfig.md) | `regardingobjectid` | `regardingobjectid_entityimageconfig` |
| `entityindex_AsyncOperations` | [entityindex](entityindex.md) | `regardingobjectid` | `regardingobjectid_entityindex` |
| `entityrecordfilter_AsyncOperations` | [entityrecordfilter](entityrecordfilter.md) | `regardingobjectid` | `regardingobjectid_entityrecordfilter` |
| `environmentvariabledefinition_AsyncOperations` | [environmentvariabledefinition](environmentvariabledefinition.md) | `regardingobjectid` | `regardingobjectid_environmentvariabledefinition` |
| `environmentvariablevalue_AsyncOperations` | [environmentvariablevalue](environmentvariablevalue.md) | `regardingobjectid` | `regardingobjectid_environmentvariablevalue` |
| `exportedexcel_AsyncOperations` | [exportedexcel](exportedexcel.md) | `regardingobjectid` | `regardingobjectid_exportedexcel` |
| `exportsolutionupload_AsyncOperations` | [exportsolutionupload](exportsolutionupload.md) | `regardingobjectid` | `regardingobjectid_exportsolutionupload` |
| `fabricaiskill_AsyncOperations` | [fabricaiskill](fabricaiskill.md) | `regardingobjectid` | `regardingobjectid_fabricaiskill` |
| `Fax_AsyncOperations` | [fax](fax.md) | `regardingobjectid` | `regardingobjectid_fax` |
| `featurecontrolsetting_AsyncOperations` | [featurecontrolsetting](featurecontrolsetting.md) | `regardingobjectid` | `regardingobjectid_featurecontrolsetting` |
| `federatedknowledgeconfiguration_AsyncOperations` | [federatedknowledgeconfiguration](federatedknowledgeconfiguration.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgeconfiguration` |
| `federatedknowledgeentityconfiguration_AsyncOperations` | [federatedknowledgeentityconfiguration](federatedknowledgeentityconfiguration.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgeentityconfiguration` |
| `FileAttachment_AsyncOperation_DataBlobId` | [fileattachment](fileattachment.md) | `datablobid` | `datablobid` |
| `FixedMonthlyFiscalCalendar_AsyncOperations` | [fixedmonthlyfiscalcalendar](fixedmonthlyfiscalcalendar.md) | `regardingobjectid` | `regardingobjectid_fixedmonthlyfiscalcalendar` |
| `flowcapacityassignment_AsyncOperations` | [flowcapacityassignment](flowcapacityassignment.md) | `regardingobjectid` | `regardingobjectid_flowcapacityassignment` |
| `flowcredentialapplication_AsyncOperations` | [flowcredentialapplication](flowcredentialapplication.md) | `regardingobjectid` | `regardingobjectid_flowcredentialapplication` |
| `flowevent_AsyncOperations` | [flowevent](flowevent.md) | `regardingobjectid` | `regardingobjectid_flowevent` |
| `flowmachine_AsyncOperations` | [flowmachine](flowmachine.md) | `regardingobjectid` | `regardingobjectid_flowmachine` |
| `flowmachinegroup_AsyncOperations` | [flowmachinegroup](flowmachinegroup.md) | `regardingobjectid` | `regardingobjectid_flowmachinegroup` |
| `flowmachineimage_AsyncOperations` | [flowmachineimage](flowmachineimage.md) | `regardingobjectid` | `regardingobjectid_flowmachineimage` |
| `flowmachineimageversion_AsyncOperations` | [flowmachineimageversion](flowmachineimageversion.md) | `regardingobjectid` | `regardingobjectid_flowmachineimageversion` |
| `flowmachinenetwork_AsyncOperations` | [flowmachinenetwork](flowmachinenetwork.md) | `regardingobjectid` | `regardingobjectid_flowmachinenetwork` |
| `flowsession_AsyncOperations` | [flowsession](flowsession.md) | `regardingobjectid` | `regardingobjectid_flowsession` |
| `flowsessionbinary_AsyncOperations` | [flowsessionbinary](flowsessionbinary.md) | `regardingobjectid` | `regardingobjectid_flowsessionbinary` |
| `fxexpression_AsyncOperations` | [fxexpression](fxexpression.md) | `regardingobjectid` | `regardingobjectid_fxexpression` |
| `Goal_AsyncOperations` | [goal](goal.md) | `regardingobjectid` | `regardingobjectid_goal` |
| `goalrollupquery_AsyncOperations` | [goalrollupquery](goalrollupquery.md) | `regardingobjectid` | `regardingobjectid_goalrollupquery` |
| `governanceconfiguration_AsyncOperations` | [governanceconfiguration](governanceconfiguration.md) | `regardingobjectid` | `regardingobjectid_governanceconfiguration` |
| `Import_AsyncOperations` | [import](import.md) | `regardingobjectid` | `regardingobjectid_import` |
| `ImportData_AsyncOperations` | [importdata](importdata.md) | `regardingobjectid` | `regardingobjectid_importdata` |
| `ImportFile_AsyncOperations` | [importfile](importfile.md) | `regardingobjectid` | `regardingobjectid_importfile` |
| `ImportLog_AsyncOperations` | [importlog](importlog.md) | `regardingobjectid` | `regardingobjectid_importlog` |
| `ImportMap_AsyncOperations` | [importmap](importmap.md) | `regardingobjectid` | `regardingobjectid_importmap` |
| `indexattributes_AsyncOperations` | [indexattributes](indexattributes.md) | `regardingobjectid` | `regardingobjectid_indexattributes` |
| `interactionforemail_AsyncOperations` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail` |
| `KbArticle_AsyncOperations` | [kbarticle](kbarticle.md) | `regardingobjectid` | `regardingobjectid_kbarticle` |
| `KbArticleComment_AsyncOperations` | [kbarticlecomment](kbarticlecomment.md) | `regardingobjectid` | `regardingobjectid_kbarticlecomment` |
| `KbArticleTemplate_AsyncOperations` | [kbarticletemplate](kbarticletemplate.md) | `regardingobjectid` | `regardingobjectid_kbarticletemplate` |
| `keyvaultreference_AsyncOperations` | [keyvaultreference](keyvaultreference.md) | `regardingobjectid` | `regardingobjectid_keyvaultreference` |
| `knowledgearticle_AsyncOperations` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle` |
| `KnowledgeBaseRecord_AsyncOperations` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord` |
| `knowledgefaq_AsyncOperations` | [knowledgefaq](knowledgefaq.md) | `regardingobjectid` | `regardingobjectid_knowledgefaq` |
| `Letter_AsyncOperations` | [letter](letter.md) | `regardingobjectid` | `regardingobjectid_letter` |
| `lk_asyncoperation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_asyncoperation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_asyncoperation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_asyncoperation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_asyncoperation_workflowactivationid` | [workflow](workflow.md) | `workflowactivationid` | `workflowactivationid` |
| `mailbox_asyncoperations` | [mailbox](mailbox.md) | `regardingobjectid` | `regardingobjectid_mailbox` |
| `MailMergeTemplate_AsyncOperations` | [mailmergetemplate](mailmergetemplate.md) | `regardingobjectid` | `regardingobjectid_mailmergetemplate` |
| `mainfewshot_AsyncOperations` | [mainfewshot](mainfewshot.md) | `regardingobjectid` | `regardingobjectid_mainfewshot` |
| `makerfewshot_AsyncOperations` | [makerfewshot](makerfewshot.md) | `regardingobjectid` | `regardingobjectid_makerfewshot` |
| `managedidentity_AsyncOperations` | [managedidentity](managedidentity.md) | `regardingobjectid` | `regardingobjectid_managedidentity` |
| `maskingrule_AsyncOperations` | [maskingrule](maskingrule.md) | `regardingobjectid` | `regardingobjectid_maskingrule` |
| `mcpserver_AsyncOperations` | [mcpserver](mcpserver.md) | `regardingobjectid` | `regardingobjectid_mcpserver` |
| `mcptool_AsyncOperations` | [mcptool](mcptool.md) | `regardingobjectid` | `regardingobjectid_mcptool` |
| `metadataforarchival_AsyncOperations` | [metadataforarchival](metadataforarchival.md) | `regardingobjectid` | `regardingobjectid_metadataforarchival` |
| `metric_AsyncOperations` | [metric](metric.md) | `regardingobjectid` | `regardingobjectid_metric` |
| `mobileofflineprofileextension_AsyncOperations` | [mobileofflineprofileextension](mobileofflineprofileextension.md) | `regardingobjectid` | `regardingobjectid_mobileofflineprofileextension` |
| `MonthlyFiscalCalendar_AsyncOperations` | [monthlyfiscalcalendar](monthlyfiscalcalendar.md) | `regardingobjectid` | `regardingobjectid_monthlyfiscalcalendar` |
| `msdyn_aibdataset_AsyncOperations` | [msdyn_aibdataset](msdyn_aibdataset.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdataset` |
| `msdyn_aibdatasetfile_AsyncOperations` | [msdyn_aibdatasetfile](msdyn_aibdatasetfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetfile` |
| `msdyn_aibdatasetrecord_AsyncOperations` | [msdyn_aibdatasetrecord](msdyn_aibdatasetrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetrecord` |
| `msdyn_aibdatasetscontainer_AsyncOperations` | [msdyn_aibdatasetscontainer](msdyn_aibdatasetscontainer.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetscontainer` |
| `msdyn_aibfeedbackloop_AsyncOperations` | [msdyn_aibfeedbackloop](msdyn_aibfeedbackloop.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfeedbackloop` |
| `msdyn_aibfile_AsyncOperations` | [msdyn_aibfile](msdyn_aibfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfile` |
| `msdyn_aibfileattacheddata_AsyncOperations` | [msdyn_aibfileattacheddata](msdyn_aibfileattacheddata.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfileattacheddata` |
| `msdyn_aiconfiguration_AsyncOperations` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiconfiguration` |
| `msdyn_aidataprocessingevent_AsyncOperations` | [msdyn_aidataprocessingevent](msdyn_aidataprocessingevent.md) | `regardingobjectid` | `regardingobjectid_msdyn_aidataprocessingevent` |
| `msdyn_aidocumenttemplate_AsyncOperations` | [msdyn_aidocumenttemplate](msdyn_aidocumenttemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_aidocumenttemplate` |
| `msdyn_aievaluationconfiguration_AsyncOperations` | [msdyn_aievaluationconfiguration](msdyn_aievaluationconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievaluationconfiguration` |
| `msdyn_aievaluationrun_AsyncOperations` | [msdyn_aievaluationrun](msdyn_aievaluationrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievaluationrun` |
| `msdyn_aievent_AsyncOperations` | [msdyn_aievent](msdyn_aievent.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievent` |
| `msdyn_aifptrainingdocument_AsyncOperations` | [msdyn_aifptrainingdocument](msdyn_aifptrainingdocument.md) | `regardingobjectid` | `regardingobjectid_msdyn_aifptrainingdocument` |
| `msdyn_aimodel_AsyncOperations` | [msdyn_aimodel](msdyn_aimodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_aimodel` |
| `msdyn_aiodimage_AsyncOperations` | [msdyn_aiodimage](msdyn_aiodimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodimage` |
| `msdyn_aiodlabel_AsyncOperations` | [msdyn_aiodlabel](msdyn_aiodlabel.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodlabel` |
| `msdyn_aiodtrainingboundingbox_AsyncOperations` | [msdyn_aiodtrainingboundingbox](msdyn_aiodtrainingboundingbox.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodtrainingboundingbox` |
| `msdyn_aiodtrainingimage_AsyncOperations` | [msdyn_aiodtrainingimage](msdyn_aiodtrainingimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodtrainingimage` |
| `msdyn_aitemplate_AsyncOperations` | [msdyn_aitemplate](msdyn_aitemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitemplate` |
| `msdyn_aitestcase_AsyncOperations` | [msdyn_aitestcase](msdyn_aitestcase.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcase` |
| `msdyn_aitestcasedocument_AsyncOperations` | [msdyn_aitestcasedocument](msdyn_aitestcasedocument.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcasedocument` |
| `msdyn_aitestcaseinput_AsyncOperations` | [msdyn_aitestcaseinput](msdyn_aitestcaseinput.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcaseinput` |
| `msdyn_aitestrun_AsyncOperations` | [msdyn_aitestrun](msdyn_aitestrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestrun` |
| `msdyn_aitestrunbatch_AsyncOperations` | [msdyn_aitestrunbatch](msdyn_aitestrunbatch.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestrunbatch` |
| `msdyn_analysiscomponent_AsyncOperations` | [msdyn_analysiscomponent](msdyn_analysiscomponent.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysiscomponent` |
| `msdyn_analysisjob_AsyncOperations` | [msdyn_analysisjob](msdyn_analysisjob.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisjob` |
| `msdyn_analysisoverride_AsyncOperations` | [msdyn_analysisoverride](msdyn_analysisoverride.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisoverride` |
| `msdyn_analysisresult_AsyncOperations` | [msdyn_analysisresult](msdyn_analysisresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisresult` |
| `msdyn_analysisresultdetail_AsyncOperations` | [msdyn_analysisresultdetail](msdyn_analysisresultdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisresultdetail` |
| `msdyn_appinsightsmetadata_AsyncOperations` | [msdyn_appinsightsmetadata](msdyn_appinsightsmetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_appinsightsmetadata` |
| `msdyn_copilotinteractions_AsyncOperations` | [msdyn_copilotinteractions](msdyn_copilotinteractions.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotinteractions` |
| `msdyn_customcontrolextendedsettings_AsyncOperations` | [msdyn_customcontrolextendedsettings](msdyn_customcontrolextendedsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_customcontrolextendedsettings` |
| `msdyn_dataflow_AsyncOperations` | [msdyn_dataflow](msdyn_dataflow.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflow` |
| `msdyn_dataflow_datalakefolder_AsyncOperations` | [msdyn_dataflow_datalakefolder](msdyn_dataflow_datalakefolder.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflow_datalakefolder` |
| `msdyn_dataflowconnectionreference_AsyncOperations` | [msdyn_dataflowconnectionreference](msdyn_dataflowconnectionreference.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowconnectionreference` |
| `msdyn_dataflowrefreshhistory_AsyncOperations` | [msdyn_dataflowrefreshhistory](msdyn_dataflowrefreshhistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowrefreshhistory` |
| `msdyn_dataflowtemplate_AsyncOperations` | [msdyn_dataflowtemplate](msdyn_dataflowtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowtemplate` |
| `msdyn_dmsrequest_AsyncOperations` | [msdyn_dmsrequest](msdyn_dmsrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmsrequest` |
| `msdyn_dmsrequeststatus_AsyncOperations` | [msdyn_dmsrequeststatus](msdyn_dmsrequeststatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmsrequeststatus` |
| `msdyn_dmssyncrequest_AsyncOperations` | [msdyn_dmssyncrequest](msdyn_dmssyncrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmssyncrequest` |
| `msdyn_dmssyncstatus_AsyncOperations` | [msdyn_dmssyncstatus](msdyn_dmssyncstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmssyncstatus` |
| `msdyn_entitylinkchatconfiguration_AsyncOperations` | [msdyn_entitylinkchatconfiguration](msdyn_entitylinkchatconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_entitylinkchatconfiguration` |
| `msdyn_entityrefreshhistory_AsyncOperations` | [msdyn_entityrefreshhistory](msdyn_entityrefreshhistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityrefreshhistory` |
| `msdyn_favoriteknowledgearticle_AsyncOperations` | [msdyn_favoriteknowledgearticle](msdyn_favoriteknowledgearticle.md) | `regardingobjectid` | `regardingobjectid_msdyn_favoriteknowledgearticle` |
| `msdyn_federatedarticle_AsyncOperations` | [msdyn_federatedarticle](msdyn_federatedarticle.md) | `regardingobjectid` | `regardingobjectid_msdyn_federatedarticle` |
| `msdyn_federatedarticleincident_AsyncOperations` | [msdyn_federatedarticleincident](msdyn_federatedarticleincident.md) | `regardingobjectid` | `regardingobjectid_msdyn_federatedarticleincident` |
| `msdyn_fileupload_AsyncOperations` | [msdyn_fileupload](msdyn_fileupload.md) | `regardingobjectid` | `regardingobjectid_msdyn_fileupload` |
| `msdyn_flow_actionapprovalmodel_AsyncOperations` | [msdyn_flow_actionapprovalmodel](msdyn_flow_actionapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_actionapprovalmodel` |
| `msdyn_flow_approval_AsyncOperations` | [msdyn_flow_approval](msdyn_flow_approval.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approval` |
| `msdyn_flow_approvalrequest_AsyncOperations` | [msdyn_flow_approvalrequest](msdyn_flow_approvalrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalrequest` |
| `msdyn_flow_approvalresponse_AsyncOperations` | [msdyn_flow_approvalresponse](msdyn_flow_approvalresponse.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalresponse` |
| `msdyn_flow_approvalstep_AsyncOperations` | [msdyn_flow_approvalstep](msdyn_flow_approvalstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalstep` |
| `msdyn_flow_awaitallactionapprovalmodel_AsyncOperations` | [msdyn_flow_awaitallactionapprovalmodel](msdyn_flow_awaitallactionapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_awaitallactionapprovalmodel` |
| `msdyn_flow_awaitallapprovalmodel_AsyncOperations` | [msdyn_flow_awaitallapprovalmodel](msdyn_flow_awaitallapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_awaitallapprovalmodel` |
| `msdyn_flow_basicapprovalmodel_AsyncOperations` | [msdyn_flow_basicapprovalmodel](msdyn_flow_basicapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_basicapprovalmodel` |
| `msdyn_flow_flowapproval_AsyncOperations` | [msdyn_flow_flowapproval](msdyn_flow_flowapproval.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_flowapproval` |
| `msdyn_formmapping_AsyncOperations` | [msdyn_formmapping](msdyn_formmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_formmapping` |
| `msdyn_function_AsyncOperations` | [msdyn_function](msdyn_function.md) | `regardingobjectid` | `regardingobjectid_msdyn_function` |
| `msdyn_helppage_AsyncOperations` | [msdyn_helppage](msdyn_helppage.md) | `regardingobjectid` | `regardingobjectid_msdyn_helppage` |
| `msdyn_historicalcaseharvestbatch_AsyncOperations` | [msdyn_historicalcaseharvestbatch](msdyn_historicalcaseharvestbatch.md) | `regardingobjectid` | `regardingobjectid_msdyn_historicalcaseharvestbatch` |
| `msdyn_historicalcaseharvestrun_AsyncOperations` | [msdyn_historicalcaseharvestrun](msdyn_historicalcaseharvestrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_historicalcaseharvestrun` |
| `msdyn_insightsstorevirtualentity_AsyncOperations` | [msdyn_insightsstorevirtualentity](msdyn_insightsstorevirtualentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_insightsstorevirtualentity` |
| `msdyn_integratedsearchprovider_AsyncOperations` | [msdyn_integratedsearchprovider](msdyn_integratedsearchprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_integratedsearchprovider` |
| `msdyn_kalanguagesetting_AsyncOperations` | [msdyn_kalanguagesetting](msdyn_kalanguagesetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_kalanguagesetting` |
| `msdyn_kbattachment_AsyncOperations` | [msdyn_kbattachment](msdyn_kbattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_kbattachment` |
| `msdyn_kmfederatedsearchconfig_AsyncOperations` | [msdyn_kmfederatedsearchconfig](msdyn_kmfederatedsearchconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_kmfederatedsearchconfig` |
| `msdyn_kmpersonalizationsetting_AsyncOperations` | [msdyn_kmpersonalizationsetting](msdyn_kmpersonalizationsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_kmpersonalizationsetting` |
| `msdyn_knowledgearticleimage_AsyncOperations` | [msdyn_knowledgearticleimage](msdyn_knowledgearticleimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticleimage` |
| `msdyn_knowledgearticletemplate_AsyncOperations` | [msdyn_knowledgearticletemplate](msdyn_knowledgearticletemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticletemplate` |
| `msdyn_knowledgeassetconfiguration_AsyncOperations` | [msdyn_knowledgeassetconfiguration](msdyn_knowledgeassetconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeassetconfiguration` |
| `msdyn_knowledgeconfiguration_AsyncOperations` | [msdyn_knowledgeconfiguration](msdyn_knowledgeconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeconfiguration` |
| `msdyn_knowledgeharvestjobrecord_AsyncOperations` | [msdyn_knowledgeharvestjobrecord](msdyn_knowledgeharvestjobrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeharvestjobrecord` |
| `msdyn_knowledgeinteractioninsight_AsyncOperations` | [msdyn_knowledgeinteractioninsight](msdyn_knowledgeinteractioninsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeinteractioninsight` |
| `msdyn_knowledgemanagementsetting_AsyncOperations` | [msdyn_knowledgemanagementsetting](msdyn_knowledgemanagementsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgemanagementsetting` |
| `msdyn_knowledgepersonalfilter_AsyncOperations` | [msdyn_knowledgepersonalfilter](msdyn_knowledgepersonalfilter.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgepersonalfilter` |
| `msdyn_knowledgesearchfilter_AsyncOperations` | [msdyn_knowledgesearchfilter](msdyn_knowledgesearchfilter.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgesearchfilter` |
| `msdyn_knowledgesearchinsight_AsyncOperations` | [msdyn_knowledgesearchinsight](msdyn_knowledgesearchinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgesearchinsight` |
| `msdyn_mobileapp_AsyncOperations` | [msdyn_mobileapp](msdyn_mobileapp.md) | `regardingobjectid` | `regardingobjectid_msdyn_mobileapp` |
| `msdyn_modulerundetail_AsyncOperations` | [msdyn_modulerundetail](msdyn_modulerundetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_modulerundetail` |
| `msdyn_pmanalysishistory_AsyncOperations` | [msdyn_pmanalysishistory](msdyn_pmanalysishistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmanalysishistory` |
| `msdyn_pmbusinessruleautomationconfig_AsyncOperations` | [msdyn_pmbusinessruleautomationconfig](msdyn_pmbusinessruleautomationconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmbusinessruleautomationconfig` |
| `msdyn_pmcalendar_AsyncOperations` | [msdyn_pmcalendar](msdyn_pmcalendar.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmcalendar` |
| `msdyn_pmcalendarversion_AsyncOperations` | [msdyn_pmcalendarversion](msdyn_pmcalendarversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmcalendarversion` |
| `msdyn_pminferredtask_AsyncOperations` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `regardingobjectid` | `regardingobjectid_msdyn_pminferredtask` |
| `msdyn_pmprocessextendedmetadataversion_AsyncOperations` | [msdyn_pmprocessextendedmetadataversion](msdyn_pmprocessextendedmetadataversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessextendedmetadataversion` |
| `msdyn_pmprocesstemplate_AsyncOperations` | [msdyn_pmprocesstemplate](msdyn_pmprocesstemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocesstemplate` |
| `msdyn_pmprocessusersettings_AsyncOperations` | [msdyn_pmprocessusersettings](msdyn_pmprocessusersettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessusersettings` |
| `msdyn_pmprocessversion_AsyncOperations` | [msdyn_pmprocessversion](msdyn_pmprocessversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessversion` |
| `msdyn_pmrecording_AsyncOperations` | [msdyn_pmrecording](msdyn_pmrecording.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmrecording` |
| `msdyn_pmsimulation_AsyncOperations` | [msdyn_pmsimulation](msdyn_pmsimulation.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmsimulation` |
| `msdyn_pmtab_AsyncOperations` | [msdyn_pmtab](msdyn_pmtab.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmtab` |
| `msdyn_pmtemplate_AsyncOperations` | [msdyn_pmtemplate](msdyn_pmtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmtemplate` |
| `msdyn_pmview_AsyncOperations` | [msdyn_pmview](msdyn_pmview.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmview` |
| `msdyn_qna_AsyncOperations` | [msdyn_qna](msdyn_qna.md) | `regardingobjectid` | `regardingobjectid_msdyn_qna` |
| `msdyn_richtextfile_AsyncOperations` | [msdyn_richtextfile](msdyn_richtextfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_richtextfile` |
| `msdyn_salesforcestructuredobject_AsyncOperations` | [msdyn_salesforcestructuredobject](msdyn_salesforcestructuredobject.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesforcestructuredobject` |
| `msdyn_salesforcestructuredqnaconfig_AsyncOperations` | [msdyn_salesforcestructuredqnaconfig](msdyn_salesforcestructuredqnaconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesforcestructuredqnaconfig` |
| `msdyn_schedule_AsyncOperations` | [msdyn_schedule](msdyn_schedule.md) | `regardingobjectid` | `regardingobjectid_msdyn_schedule` |
| `msdyn_serviceconfiguration_AsyncOperations` | [msdyn_serviceconfiguration](msdyn_serviceconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_serviceconfiguration` |
| `msdyn_slakpi_AsyncOperations` | [msdyn_slakpi](msdyn_slakpi.md) | `regardingobjectid` | `regardingobjectid_msdyn_slakpi` |
| `msdyn_solutionhealthrule_AsyncOperations` | [msdyn_solutionhealthrule](msdyn_solutionhealthrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthrule` |
| `msdyn_solutionhealthruleargument_AsyncOperations` | [msdyn_solutionhealthruleargument](msdyn_solutionhealthruleargument.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthruleargument` |
| `msdyn_solutionhealthruleset_AsyncOperations` | [msdyn_solutionhealthruleset](msdyn_solutionhealthruleset.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthruleset` |
| `msdyn_tour_AsyncOperations` | [msdyn_tour](msdyn_tour.md) | `regardingobjectid` | `regardingobjectid_msdyn_tour` |
| `msdyn_virtualtablecolumncandidate_AsyncOperations` | [msdyn_virtualtablecolumncandidate](msdyn_virtualtablecolumncandidate.md) | `regardingobjectid` | `regardingobjectid_msdyn_virtualtablecolumncandidate` |
| `msdyn_workflowactionstatus_AsyncOperations` | [msdyn_workflowactionstatus](msdyn_workflowactionstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_workflowactionstatus` |
| `msdynce_botcontent_AsyncOperations` | [msdynce_botcontent](msdynce_botcontent.md) | `regardingobjectid` | `regardingobjectid_msdynce_botcontent` |
| `msgraphresourcetosubscription_AsyncOperations` | [msgraphresourcetosubscription](msgraphresourcetosubscription.md) | `regardingobjectid` | `regardingobjectid_msgraphresourcetosubscription` |
| `mspcat_catalogsubmissionfiles_AsyncOperations` | [mspcat_catalogsubmissionfiles](mspcat_catalogsubmissionfiles.md) | `regardingobjectid` | `regardingobjectid_mspcat_catalogsubmissionfiles` |
| `mspcat_packagestore_AsyncOperations` | [mspcat_packagestore](mspcat_packagestore.md) | `regardingobjectid` | `regardingobjectid_mspcat_packagestore` |
| `Organization_AsyncOperations` | [organization](organization.md) | `regardingobjectid` | `regardingobjectid_organization` |
| `organizationdatasyncfnostate_AsyncOperations` | [organizationdatasyncfnostate](organizationdatasyncfnostate.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncfnostate` |
| `organizationdatasyncstate_AsyncOperations` | [organizationdatasyncstate](organizationdatasyncstate.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncstate` |
| `organizationdatasyncsubscription_AsyncOperations` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscription` |
| `organizationdatasyncsubscriptionentity_AsyncOperations` | [organizationdatasyncsubscriptionentity](organizationdatasyncsubscriptionentity.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscriptionentity` |
| `organizationdatasyncsubscriptionfnotable_AsyncOperations` | [organizationdatasyncsubscriptionfnotable](organizationdatasyncsubscriptionfnotable.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscriptionfnotable` |
| `owner_asyncoperations` | [owner](owner.md) | `ownerid` | `ownerid` |
| `package_AsyncOperations` | [package](package.md) | `regardingobjectid` | `regardingobjectid_package` |
| `packagehistory_AsyncOperations` | [packagehistory](packagehistory.md) | `regardingobjectid` | `regardingobjectid_packagehistory` |
| `PhoneCall_AsyncOperations` | [phonecall](phonecall.md) | `regardingobjectid` | `regardingobjectid_phonecall` |
| `plannerbusinessscenario_AsyncOperations` | [plannerbusinessscenario](plannerbusinessscenario.md) | `regardingobjectid` | `regardingobjectid_plannerbusinessscenario` |
| `plannersyncaction_AsyncOperations` | [plannersyncaction](plannersyncaction.md) | `regardingobjectid` | `regardingobjectid_plannersyncaction` |
| `plugin_AsyncOperations` | [plugin](plugin.md) | `regardingobjectid` | `regardingobjectid_plugin` |
| `pluginpackage_AsyncOperations` | [pluginpackage](pluginpackage.md) | `regardingobjectid` | `regardingobjectid_pluginpackage` |
| `position_AsyncOperations` | [position](position.md) | `regardingobjectid` | `regardingobjectid_position` |
| `post_AsyncOperations` | [post](post.md) | `regardingobjectid` | `regardingobjectid_post` |
| `PostFollow_AsyncOperations` | [postfollow](postfollow.md) | `regardingobjectid` | `regardingobjectid_postfollow` |
| `powerbidataset_AsyncOperations` | [powerbidataset](powerbidataset.md) | `regardingobjectid` | `regardingobjectid_powerbidataset` |
| `powerbidatasetapdx_AsyncOperations` | [powerbidatasetapdx](powerbidatasetapdx.md) | `regardingobjectid` | `regardingobjectid_powerbidatasetapdx` |
| `powerbimashupparameter_AsyncOperations` | [powerbimashupparameter](powerbimashupparameter.md) | `regardingobjectid` | `regardingobjectid_powerbimashupparameter` |
| `powerbireport_AsyncOperations` | [powerbireport](powerbireport.md) | `regardingobjectid` | `regardingobjectid_powerbireport` |
| `powerbireportapdx_AsyncOperations` | [powerbireportapdx](powerbireportapdx.md) | `regardingobjectid` | `regardingobjectid_powerbireportapdx` |
| `powerfxrule_AsyncOperations` | [powerfxrule](powerfxrule.md) | `regardingobjectid` | `regardingobjectid_powerfxrule` |
| `powerpagecomponent_AsyncOperations` | [powerpagecomponent](powerpagecomponent.md) | `regardingobjectid` | `regardingobjectid_powerpagecomponent` |
| `powerpagesddosalert_AsyncOperations` | [powerpagesddosalert](powerpagesddosalert.md) | `regardingobjectid` | `regardingobjectid_powerpagesddosalert` |
| `powerpagesite_AsyncOperations` | [powerpagesite](powerpagesite.md) | `regardingobjectid` | `regardingobjectid_powerpagesite` |
| `powerpagesitelanguage_AsyncOperations` | [powerpagesitelanguage](powerpagesitelanguage.md) | `regardingobjectid` | `regardingobjectid_powerpagesitelanguage` |
| `powerpagesitepublished_AsyncOperations` | [powerpagesitepublished](powerpagesitepublished.md) | `regardingobjectid` | `regardingobjectid_powerpagesitepublished` |
| `powerpagesmanagedidentity_AsyncOperations` | [powerpagesmanagedidentity](powerpagesmanagedidentity.md) | `regardingobjectid` | `regardingobjectid_powerpagesmanagedidentity` |
| `powerpagesscanreport_AsyncOperations` | [powerpagesscanreport](powerpagesscanreport.md) | `regardingobjectid` | `regardingobjectid_powerpagesscanreport` |
| `powerpagessourcefile_AsyncOperations` | [powerpagessourcefile](powerpagessourcefile.md) | `regardingobjectid` | `regardingobjectid_powerpagessourcefile` |
| `Privilege_AsyncOperations` | [privilege](privilege.md) | `regardingobjectid` | `regardingobjectid_privilege` |
| `privilegecheckerlog_AsyncOperations` | [privilegecheckerlog](privilegecheckerlog.md) | `regardingobjectid` | `regardingobjectid_privilegecheckerlog` |
| `privilegecheckerrun_AsyncOperations` | [privilegecheckerrun](privilegecheckerrun.md) | `regardingobjectid` | `regardingobjectid_privilegecheckerrun` |
| `privilegesremovalsetting_AsyncOperations` | [privilegesremovalsetting](privilegesremovalsetting.md) | `regardingobjectid` | `regardingobjectid_privilegesremovalsetting` |
| `processstageparameter_AsyncOperations` | [processstageparameter](processstageparameter.md) | `regardingobjectid` | `regardingobjectid_processstageparameter` |
| `provisionlanguageforuser_AsyncOperations` | [provisionlanguageforuser](provisionlanguageforuser.md) | `regardingobjectid` | `regardingobjectid_provisionlanguageforuser` |
| `purviewlabelinfo_AsyncOperations` | [purviewlabelinfo](purviewlabelinfo.md) | `regardingobjectid` | `regardingobjectid_purviewlabelinfo` |
| `QuarterlyFiscalCalendar_AsyncOperations` | [quarterlyfiscalcalendar](quarterlyfiscalcalendar.md) | `regardingobjectid` | `regardingobjectid_quarterlyfiscalcalendar` |
| `Queue_AsyncOperations` | [queue](queue.md) | `regardingobjectid` | `regardingobjectid_queue` |
| `QueueItem_AsyncOperations` | [queueitem](queueitem.md) | `regardingobjectid` | `regardingobjectid_queueitem` |
| `recordfilter_AsyncOperations` | [recordfilter](recordfilter.md) | `regardingobjectid` | `regardingobjectid_recordfilter` |
| `RecurringAppointmentMaster_AsyncOperations` | [recurringappointmentmaster](recurringappointmentmaster.md) | `regardingobjectid` | `regardingobjectid_recurringappointmentmaster` |
| `recyclebinconfig_AsyncOperations` | [recyclebinconfig](recyclebinconfig.md) | `regardingobjectid` | `regardingobjectid_recyclebinconfig` |
| `relationshipattribute_AsyncOperations` | [relationshipattribute](relationshipattribute.md) | `regardingobjectid` | `regardingobjectid_relationshipattribute` |
| `Report_AsyncOperations` | [report](report.md) | `regardingobjectid` | `regardingobjectid_report` |
| `reportparameter_AsyncOperations` | [reportparameter](reportparameter.md) | `regardingobjectid` | `regardingobjectid_reportparameter` |
| `retaineddataexcel_AsyncOperations` | [retaineddataexcel](retaineddataexcel.md) | `regardingobjectid` | `regardingobjectid_retaineddataexcel` |
| `retentionconfig_AsyncOperations` | [retentionconfig](retentionconfig.md) | `regardingobjectid` | `regardingobjectid_retentionconfig` |
| `retentionfailuredetail_AsyncOperations` | [retentionfailuredetail](retentionfailuredetail.md) | `regardingobjectid` | `regardingobjectid_retentionfailuredetail` |
| `retentionoperation_AsyncOperations` | [retentionoperation](retentionoperation.md) | `regardingobjectid` | `regardingobjectid_retentionoperation` |
| `retentionoperationdetail_AsyncOperations` | [retentionoperationdetail](retentionoperationdetail.md) | `regardingobjectid` | `regardingobjectid_retentionoperationdetail` |
| `retentionsuccessdetail_AsyncOperations` | [retentionsuccessdetail](retentionsuccessdetail.md) | `regardingobjectid` | `regardingobjectid_retentionsuccessdetail` |
| `Role_AsyncOperations` | [role](role.md) | `regardingobjectid` | `regardingobjectid_role` |
| `roleeditorlayout_AsyncOperations` | [roleeditorlayout](roleeditorlayout.md) | `regardingobjectid` | `regardingobjectid_roleeditorlayout` |
| `rollupfield_AsyncOperations` | [rollupfield](rollupfield.md) | `regardingobjectid` | `regardingobjectid_rollupfield` |
| `sa_suggestedaction_AsyncOperations` | [sa_suggestedaction](sa_suggestedaction.md) | `regardingobjectid` | `regardingobjectid_sa_suggestedaction` |
| `sa_suggestedactioncriteria_AsyncOperations` | [sa_suggestedactioncriteria](sa_suggestedactioncriteria.md) | `regardingobjectid` | `regardingobjectid_sa_suggestedactioncriteria` |
| `SavedQuery_AsyncOperations` | [savedquery](savedquery.md) | `regardingobjectid` | `regardingobjectid_savedquery` |
| `savingrule_AsyncOperations` | [savingrule](savingrule.md) | `regardingobjectid` | `regardingobjectid_savingrule` |
| `SdkMessageProcessingStep_AsyncOperations` | [sdkmessageprocessingstep](sdkmessageprocessingstep.md) | `owningextensionid` | `owningextensionid` |
| `searchattributesettings_AsyncOperations` | [searchattributesettings](searchattributesettings.md) | `regardingobjectid` | `regardingobjectid_searchattributesettings` |
| `searchcustomanalyzer_AsyncOperations` | [searchcustomanalyzer](searchcustomanalyzer.md) | `regardingobjectid` | `regardingobjectid_searchcustomanalyzer` |
| `searchrelationshipsettings_AsyncOperations` | [searchrelationshipsettings](searchrelationshipsettings.md) | `regardingobjectid` | `regardingobjectid_searchrelationshipsettings` |
| `SemiAnnualFiscalCalendar_AsyncOperations` | [semiannualfiscalcalendar](semiannualfiscalcalendar.md) | `regardingobjectid` | `regardingobjectid_semiannualfiscalcalendar` |
| `sensitivitylabelattributemapping_AsyncOperations` | [sensitivitylabelattributemapping](sensitivitylabelattributemapping.md) | `regardingobjectid` | `regardingobjectid_sensitivitylabelattributemapping` |
| `serviceplan_AsyncOperations` | [serviceplan](serviceplan.md) | `regardingobjectid` | `regardingobjectid_serviceplan` |
| `serviceplanmapping_AsyncOperations` | [serviceplanmapping](serviceplanmapping.md) | `regardingobjectid` | `regardingobjectid_serviceplanmapping` |
| `sharedlinksetting_AsyncOperations` | [sharedlinksetting](sharedlinksetting.md) | `regardingobjectid` | `regardingobjectid_sharedlinksetting` |
| `sharedobject_AsyncOperations` | [sharedobject](sharedobject.md) | `regardingobjectid` | `regardingobjectid_sharedobject` |
| `sharedworkspace_AsyncOperations` | [sharedworkspace](sharedworkspace.md) | `regardingobjectid` | `regardingobjectid_sharedworkspace` |
| `sharedworkspacepool_AsyncOperations` | [sharedworkspacepool](sharedworkspacepool.md) | `regardingobjectid` | `regardingobjectid_sharedworkspacepool` |
| `SharePointDocumentLocation_AsyncOperations` | [sharepointdocumentlocation](sharepointdocumentlocation.md) | `regardingobjectid` | `regardingobjectid_sharepointdocumentlocation` |
| `sharepointmanagedidentity_AsyncOperations` | [sharepointmanagedidentity](sharepointmanagedidentity.md) | `regardingobjectid` | `regardingobjectid_sharepointmanagedidentity` |
| `SharePointSite_AsyncOperations` | [sharepointsite](sharepointsite.md) | `regardingobjectid` | `regardingobjectid_sharepointsite` |
| `sideloadedaiplugin_AsyncOperations` | [sideloadedaiplugin](sideloadedaiplugin.md) | `regardingobjectid` | `regardingobjectid_sideloadedaiplugin` |
| `similarityrule_AsyncOperations` | [similarityrule](similarityrule.md) | `regardingobjectid` | `regardingobjectid_similarityrule` |
| `slabase_AsyncOperations` | [sla](sla.md) | `regardingobjectid` | `regardingobjectid_sla` |
| `SocialActivity_AsyncOperations` | [socialactivity](socialactivity.md) | `regardingobjectid` | `regardingobjectid_socialactivity` |
| `SocialProfile_AsyncOperations` | [socialprofile](socialprofile.md) | `regardingobjectid` | `regardingobjectid_socialprofile` |
| `solutioncomponentattributeconfiguration_AsyncOperations` | [solutioncomponentattributeconfiguration](solutioncomponentattributeconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentattributeconfiguration` |
| `solutioncomponentbatchconfiguration_AsyncOperations` | [solutioncomponentbatchconfiguration](solutioncomponentbatchconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentbatchconfiguration` |
| `solutioncomponentconfiguration_AsyncOperations` | [solutioncomponentconfiguration](solutioncomponentconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentconfiguration` |
| `solutioncomponentrelationshipconfiguration_AsyncOperations` | [solutioncomponentrelationshipconfiguration](solutioncomponentrelationshipconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentrelationshipconfiguration` |
| `stagedentity_AsyncOperations` | [stagedentity](stagedentity.md) | `regardingobjectid` | `regardingobjectid_stagedentity` |
| `stagedentityattribute_AsyncOperations` | [stagedentityattribute](stagedentityattribute.md) | `regardingobjectid` | `regardingobjectid_stagedentityattribute` |
| `stagedmetadataasyncoperation_AsyncOperations` | [stagedmetadataasyncoperation](stagedmetadataasyncoperation.md) | `regardingobjectid` | `regardingobjectid_stagedmetadataasyncoperation` |
| `stagesolutionupload_AsyncOperations` | [stagesolutionupload](stagesolutionupload.md) | `regardingobjectid` | `regardingobjectid_stagesolutionupload` |
| `Subject_AsyncOperations` | [subject](subject.md) | `regardingobjectid` | `regardingobjectid_subject` |
| `supportusertable_AsyncOperations` | [supportusertable](supportusertable.md) | `regardingobjectid` | `regardingobjectid_supportusertable` |
| `synapsedatabase_AsyncOperations` | [synapsedatabase](synapsedatabase.md) | `regardingobjectid` | `regardingobjectid_synapsedatabase` |
| `synapselinkexternaltablestate_AsyncOperations` | [synapselinkexternaltablestate](synapselinkexternaltablestate.md) | `regardingobjectid` | `regardingobjectid_synapselinkexternaltablestate` |
| `synapselinkprofile_AsyncOperations` | [synapselinkprofile](synapselinkprofile.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofile` |
| `synapselinkprofileentity_AsyncOperations` | [synapselinkprofileentity](synapselinkprofileentity.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofileentity` |
| `synapselinkprofileentitystate_AsyncOperations` | [synapselinkprofileentitystate](synapselinkprofileentitystate.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofileentitystate` |
| `synapselinkschedule_AsyncOperations` | [synapselinkschedule](synapselinkschedule.md) | `regardingobjectid` | `regardingobjectid_synapselinkschedule` |
| `system_user_asyncoperation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `SystemForm_AsyncOperations` | [systemform](systemform.md) | `regardingobjectid` | `regardingobjectid_systemform` |
| `SystemUser_AsyncOperations` | [systemuser](systemuser.md) | `regardingobjectid` | `regardingobjectid_systemuser` |
| `systemuserauthorizationchangetracker_AsyncOperations` | [systemuserauthorizationchangetracker](systemuserauthorizationchangetracker.md) | `regardingobjectid` | `regardingobjectid_systemuserauthorizationchangetracker` |
| `tag_AsyncOperations` | [tag](tag.md) | `regardingobjectid` | `regardingobjectid_tag` |
| `taggedflowsession_AsyncOperations` | [taggedflowsession](taggedflowsession.md) | `regardingobjectid` | `regardingobjectid_taggedflowsession` |
| `taggedprocess_AsyncOperations` | [taggedprocess](taggedprocess.md) | `regardingobjectid` | `regardingobjectid_taggedprocess` |
| `Task_AsyncOperations` | [task](task.md) | `regardingobjectid` | `regardingobjectid_task` |
| `team_asyncoperation` | [team](team.md) | `owningteam` | `owningteam` |
| `Team_AsyncOperations` | [team](team.md) | `regardingobjectid` | `regardingobjectid_team` |
| `teammobileofflineprofilemembership_AsyncOperations` | [teammobileofflineprofilemembership](teammobileofflineprofilemembership.md) | `regardingobjectid` | `regardingobjectid_teammobileofflineprofilemembership` |
| `Template_AsyncOperations` | [template](template.md) | `regardingobjectid` | `regardingobjectid_template` |
| `Territory_AsyncOperations` | [territory](territory.md) | `regardingobjectid` | `regardingobjectid_territory` |
| `theme_AsyncOperations` | [theme](theme.md) | `regardingobjectid` | `regardingobjectid_theme` |
| `TransactionCurrency_AsyncOperations` | [transactioncurrency](transactioncurrency.md) | `regardingobjectid` | `regardingobjectid_transactioncurrency` |
| `unstructuredfilesearchentity_AsyncOperations` | [unstructuredfilesearchentity](unstructuredfilesearchentity.md) | `regardingobjectid` | `regardingobjectid_unstructuredfilesearchentity` |
| `unstructuredfilesearchrecord_AsyncOperations` | [unstructuredfilesearchrecord](unstructuredfilesearchrecord.md) | `regardingobjectid` | `regardingobjectid_unstructuredfilesearchrecord` |
| `UserForm_AsyncOperations` | [userform](userform.md) | `regardingobjectid` | `regardingobjectid_userform` |
| `usermapping_AsyncOperations` | [usermapping](usermapping.md) | `regardingobjectid` | `regardingobjectid_usermapping` |
| `usermobileofflineprofilemembership_AsyncOperations` | [usermobileofflineprofilemembership](usermobileofflineprofilemembership.md) | `regardingobjectid` | `regardingobjectid_usermobileofflineprofilemembership` |
| `UserQuery_AsyncOperations` | [userquery](userquery.md) | `regardingobjectid` | `regardingobjectid_userquery` |
| `userrating_AsyncOperations` | [userrating](userrating.md) | `regardingobjectid` | `regardingobjectid_userrating` |
| `viewasexamplequestion_AsyncOperations` | [viewasexamplequestion](viewasexamplequestion.md) | `regardingobjectid` | `regardingobjectid_viewasexamplequestion` |
| `virtualentitymetadata_AsyncOperations` | [virtualentitymetadata](virtualentitymetadata.md) | `regardingobjectid` | `regardingobjectid_virtualentitymetadata` |
| `workflowbinary_AsyncOperations` | [workflowbinary](workflowbinary.md) | `regardingobjectid` | `regardingobjectid_workflowbinary` |
| `workflowmetadata_AsyncOperations` | [workflowmetadata](workflowmetadata.md) | `regardingobjectid` | `regardingobjectid_workflowmetadata` |
| `workqueue_AsyncOperations` | [workqueue](workqueue.md) | `regardingobjectid` | `regardingobjectid_workqueue` |
| `workqueueitem_AsyncOperations` | [workqueueitem](workqueueitem.md) | `regardingobjectid` | `regardingobjectid_workqueueitem` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `AsyncOperation_BulkDeleteOperation` | _n/a_ | `asyncoperationid` | _n/a_ |
| `AsyncOperation_DuplicateBaseRecord` | _n/a_ | `asyncoperationid` | _n/a_ |
| `AsyncOperation_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `asyncoperation_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `AsyncOperation_MailboxTrackingFolder` | _n/a_ | `regardingobjectid` | _n/a_ |
| `AsyncOperation_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lk_workflowlog_asyncoperation_childworkflow` | _n/a_ | `childworkflowinstanceid` | _n/a_ |
| `lk_workflowlog_asyncoperations` | _n/a_ | `asyncoperationid` | _n/a_ |


## Source

Generated from [asyncoperation.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/asyncoperation.md) on 2026-05-06.