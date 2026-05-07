---
logical: "bulkdeletefailure"
display: "Bulk Delete Failure"
entitySetName: "bulkdeletefailures"
primaryId: "bulkdeletefailureid"
tableType: "Standard"
ownership: "None"
---

# Bulk Delete Failure

Record that was not deleted during a bulk deletion job.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `bulkdeletefailure` |
| Display name | Bulk Delete Failure |
| Display (plural) | Bulk Delete Failures |
| Schema name | `BulkDeleteFailure` |
| Entity set (Web API) | `bulkdeletefailures` |
| Primary id attribute | `bulkdeletefailureid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/bulkdeletefailures?$select=&$top=10
GET /api/data/v9.2/bulkdeletefailures(<guid>)
POST /api/data/v9.2/bulkdeletefailures
PATCH /api/data/v9.2/bulkdeletefailures(<guid>)
DELETE /api/data/v9.2/bulkdeletefailures(<guid>)
```

## Attributes

Writable: **0** · Read-only: **12**

### Read-only

`AsyncOperationId`, `BulkDeleteFailureId`, `BulkDeleteOperationId`, `ErrorDescription`, `ErrorNumber`, `OrderedQueryIndex`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningUser`, `RegardingObjectId`, `RegardingObjectTypeCode`

## Relationships

### Many-to-One (359)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Account_BulkDeleteFailures` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account` |
| `activityfileattachment_BulkDeleteFailures` | [activityfileattachment](activityfileattachment.md) | `regardingobjectid` | `regardingobjectid_activityfileattachment` |
| `ActivityMimeAttachment_BulkDeleteFailures` | [activitymimeattachment](activitymimeattachment.md) | `regardingobjectid` | `regardingobjectid_activitymimeattachment` |
| `ActivityPointer_BulkDeleteFailures` | [activitypointer](activitypointer.md) | `regardingobjectid` | `regardingobjectid_activitypointer` |
| `adx_externalidentity_BulkDeleteFailures` | [adx_externalidentity](adx_externalidentity.md) | `regardingobjectid` | `regardingobjectid_adx_externalidentity` |
| `adx_invitation_BulkDeleteFailures` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation` |
| `adx_inviteredemption_BulkDeleteFailures` | [adx_inviteredemption](adx_inviteredemption.md) | `regardingobjectid` | `regardingobjectid_adx_inviteredemption` |
| `adx_portalcomment_BulkDeleteFailures` | [adx_portalcomment](adx_portalcomment.md) | `regardingobjectid` | `regardingobjectid_adx_portalcomment` |
| `adx_setting_BulkDeleteFailures` | [adx_setting](adx_setting.md) | `regardingobjectid` | `regardingobjectid_adx_setting` |
| `adx_webformsession_BulkDeleteFailures` | [adx_webformsession](adx_webformsession.md) | `regardingobjectid` | `regardingobjectid_adx_webformsession` |
| `aicopilot_BulkDeleteFailures` | [aicopilot](aicopilot.md) | `regardingobjectid` | `regardingobjectid_aicopilot` |
| `aiplugin_BulkDeleteFailures` | [aiplugin](aiplugin.md) | `regardingobjectid` | `regardingobjectid_aiplugin` |
| `aipluginauth_BulkDeleteFailures` | [aipluginauth](aipluginauth.md) | `regardingobjectid` | `regardingobjectid_aipluginauth` |
| `aipluginconversationstarter_BulkDeleteFailures` | [aipluginconversationstarter](aipluginconversationstarter.md) | `regardingobjectid` | `regardingobjectid_aipluginconversationstarter` |
| `aipluginconversationstartermapping_BulkDeleteFailures` | [aipluginconversationstartermapping](aipluginconversationstartermapping.md) | `regardingobjectid` | `regardingobjectid_aipluginconversationstartermapping` |
| `aipluginexternalschema_BulkDeleteFailures` | [aipluginexternalschema](aipluginexternalschema.md) | `regardingobjectid` | `regardingobjectid_aipluginexternalschema` |
| `aipluginexternalschemaproperty_BulkDeleteFailures` | [aipluginexternalschemaproperty](aipluginexternalschemaproperty.md) | `regardingobjectid` | `regardingobjectid_aipluginexternalschemaproperty` |
| `aiplugingovernance_BulkDeleteFailures` | [aiplugingovernance](aiplugingovernance.md) | `regardingobjectid` | `regardingobjectid_aiplugingovernance` |
| `aiplugingovernanceext_BulkDeleteFailures` | [aiplugingovernanceext](aiplugingovernanceext.md) | `regardingobjectid` | `regardingobjectid_aiplugingovernanceext` |
| `aiplugininstance_BulkDeleteFailures` | [aiplugininstance](aiplugininstance.md) | `regardingobjectid` | `regardingobjectid_aiplugininstance` |
| `aipluginoperation_BulkDeleteFailures` | [aipluginoperation](aipluginoperation.md) | `regardingobjectid` | `regardingobjectid_aipluginoperation` |
| `aipluginoperationparameter_BulkDeleteFailures` | [aipluginoperationparameter](aipluginoperationparameter.md) | `regardingobjectid` | `regardingobjectid_aipluginoperationparameter` |
| `aipluginoperationresponsetemplate_BulkDeleteFailures` | [aipluginoperationresponsetemplate](aipluginoperationresponsetemplate.md) | `regardingobjectid` | `regardingobjectid_aipluginoperationresponsetemplate` |
| `aiplugintitle_BulkDeleteFailures` | [aiplugintitle](aiplugintitle.md) | `regardingobjectid` | `regardingobjectid_aiplugintitle` |
| `aipluginusersetting_BulkDeleteFailures` | [aipluginusersetting](aipluginusersetting.md) | `regardingobjectid` | `regardingobjectid_aipluginusersetting` |
| `allowedmcpclient_BulkDeleteFailures` | [allowedmcpclient](allowedmcpclient.md) | `regardingobjectid` | `regardingobjectid_allowedmcpclient` |
| `Annotation_BulkDeleteFailures` | [annotation](annotation.md) | `regardingobjectid` | `regardingobjectid_annotation` |
| `AnnualFiscalCalendar_BulkDeleteFailures` | [annualfiscalcalendar](annualfiscalcalendar.md) | `regardingobjectid` | `regardingobjectid_annualfiscalcalendar` |
| `appaction_BulkDeleteFailures` | [appaction](appaction.md) | `regardingobjectid` | `regardingobjectid_appaction` |
| `appactionmigration_BulkDeleteFailures` | [appactionmigration](appactionmigration.md) | `regardingobjectid` | `regardingobjectid_appactionmigration` |
| `appactionrule_BulkDeleteFailures` | [appactionrule](appactionrule.md) | `regardingobjectid` | `regardingobjectid_appactionrule` |
| `application_BulkDeleteFailures` | [application](application.md) | `regardingobjectid` | `regardingobjectid_application` |
| `applicationuser_BulkDeleteFailures` | [applicationuser](applicationuser.md) | `regardingobjectid` | `regardingobjectid_applicationuser` |
| `Appointment_BulkDeleteFailures` | [appointment](appointment.md) | `regardingobjectid` | `regardingobjectid_appointment` |
| `approvalprocess_BulkDeleteFailures` | [approvalprocess](approvalprocess.md) | `regardingobjectid` | `regardingobjectid_approvalprocess` |
| `approvalstageapproval_BulkDeleteFailures` | [approvalstageapproval](approvalstageapproval.md) | `regardingobjectid` | `regardingobjectid_approvalstageapproval` |
| `approvalstagecondition_BulkDeleteFailures` | [approvalstagecondition](approvalstagecondition.md) | `regardingobjectid` | `regardingobjectid_approvalstagecondition` |
| `approvalstageintelligent_BulkDeleteFailures` | [approvalstageintelligent](approvalstageintelligent.md) | `regardingobjectid` | `regardingobjectid_approvalstageintelligent` |
| `approvalstageorder_BulkDeleteFailures` | [approvalstageorder](approvalstageorder.md) | `regardingobjectid` | `regardingobjectid_approvalstageorder` |
| `attributeclusterconfig_BulkDeleteFailures` | [attributeclusterconfig](attributeclusterconfig.md) | `regardingobjectid` | `regardingobjectid_attributeclusterconfig` |
| `attributeimageconfig_BulkDeleteFailures` | [attributeimageconfig](attributeimageconfig.md) | `regardingobjectid` | `regardingobjectid_attributeimageconfig` |
| `attributemaskingrule_BulkDeleteFailures` | [attributemaskingrule](attributemaskingrule.md) | `regardingobjectid` | `regardingobjectid_attributemaskingrule` |
| `attributepicklistvalue_BulkDeleteFailures` | [attributepicklistvalue](attributepicklistvalue.md) | `regardingobjectid` | `regardingobjectid_attributepicklistvalue` |
| `bot_BulkDeleteFailures` | [bot](bot.md) | `regardingobjectid` | `regardingobjectid_bot` |
| `botcomponent_BulkDeleteFailures` | [botcomponent](botcomponent.md) | `regardingobjectid` | `regardingobjectid_botcomponent` |
| `botcomponentcollection_BulkDeleteFailures` | [botcomponentcollection](botcomponentcollection.md) | `regardingobjectid` | `regardingobjectid_botcomponentcollection` |
| `BulkDeleteOperation_BulkDeleteFailure` | [bulkdeleteoperation](bulkdeleteoperation.md) | `bulkdeleteoperationid` | `bulkdeleteoperationid` |
| `businessprocess_BulkDeleteFailures` | [businessprocess](businessprocess.md) | `regardingobjectid` | `regardingobjectid_businessprocess` |
| `BusinessUnit_BulkDeleteFailures` | [businessunit](businessunit.md) | `regardingobjectid` | `regardingobjectid_businessunit` |
| `BusinessUnitNewsArticle_BulkDeleteFailures` | [businessunitnewsarticle](businessunitnewsarticle.md) | `regardingobjectid` | `regardingobjectid_businessunitnewsarticle` |
| `Calendar_BulkDeleteFailures` | [calendar](calendar.md) | `regardingobjectid` | `regardingobjectid_calendar` |
| `card_BulkDeleteFailures` | [card](card.md) | `regardingobjectid` | `regardingobjectid_card` |
| `catalog_BulkDeleteFailures` | [catalog](catalog.md) | `regardingobjectid` | `regardingobjectid_catalog` |
| `catalogassignment_BulkDeleteFailures` | [catalogassignment](catalogassignment.md) | `regardingobjectid` | `regardingobjectid_catalogassignment` |
| `certificatecredential_BulkDeleteFailures` | [certificatecredential](certificatecredential.md) | `regardingobjectid` | `regardingobjectid_certificatecredential` |
| `chat_BulkDeleteFailures` | [chat](chat.md) | `regardingobjectid` | `regardingobjectid_chat` |
| `connectioninstance_BulkDeleteFailures` | [connectioninstance](connectioninstance.md) | `regardingobjectid` | `regardingobjectid_connectioninstance` |
| `connectionreference_BulkDeleteFailures` | [connectionreference](connectionreference.md) | `regardingobjectid` | `regardingobjectid_connectionreference` |
| `connector_BulkDeleteFailures` | [connector](connector.md) | `regardingobjectid` | `regardingobjectid_connector` |
| `Contact_BulkDeleteFailures` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact` |
| `conversationtranscript_BulkDeleteFailures` | [conversationtranscript](conversationtranscript.md) | `regardingobjectid` | `regardingobjectid_conversationtranscript` |
| `copilotexamplequestion_BulkDeleteFailures` | [copilotexamplequestion](copilotexamplequestion.md) | `regardingobjectid` | `regardingobjectid_copilotexamplequestion` |
| `copilotglossaryterm_BulkDeleteFailures` | [copilotglossaryterm](copilotglossaryterm.md) | `regardingobjectid` | `regardingobjectid_copilotglossaryterm` |
| `copilotsynonyms_BulkDeleteFailures` | [copilotsynonyms](copilotsynonyms.md) | `regardingobjectid` | `regardingobjectid_copilotsynonyms` |
| `credential_BulkDeleteFailures` | [credential](credential.md) | `regardingobjectid` | `regardingobjectid_credential` |
| `customapi_BulkDeleteFailures` | [customapi](customapi.md) | `regardingobjectid` | `regardingobjectid_customapi` |
| `customapirequestparameter_BulkDeleteFailures` | [customapirequestparameter](customapirequestparameter.md) | `regardingobjectid` | `regardingobjectid_customapirequestparameter` |
| `customapiresponseproperty_BulkDeleteFailures` | [customapiresponseproperty](customapiresponseproperty.md) | `regardingobjectid` | `regardingobjectid_customapiresponseproperty` |
| `CustomerAddress_BulkDeleteFailures` | [customeraddress](customeraddress.md) | `regardingobjectid` | `regardingobjectid_customeraddress` |
| `datalakefolder_BulkDeleteFailures` | [datalakefolder](datalakefolder.md) | `regardingobjectid` | `regardingobjectid_datalakefolder` |
| `datalakefolderpermission_BulkDeleteFailures` | [datalakefolderpermission](datalakefolderpermission.md) | `regardingobjectid` | `regardingobjectid_datalakefolderpermission` |
| `datalakeworkspace_BulkDeleteFailures` | [datalakeworkspace](datalakeworkspace.md) | `regardingobjectid` | `regardingobjectid_datalakeworkspace` |
| `datalakeworkspacepermission_BulkDeleteFailures` | [datalakeworkspacepermission](datalakeworkspacepermission.md) | `regardingobjectid` | `regardingobjectid_datalakeworkspacepermission` |
| `dataprocessingconfiguration_BulkDeleteFailures` | [dataprocessingconfiguration](dataprocessingconfiguration.md) | `regardingobjectid` | `regardingobjectid_dataprocessingconfiguration` |
| `delegatedauthorization_BulkDeleteFailures` | [delegatedauthorization](delegatedauthorization.md) | `regardingobjectid` | `regardingobjectid_delegatedauthorization` |
| `desktopflowbinary_BulkDeleteFailures` | [desktopflowbinary](desktopflowbinary.md) | `regardingobjectid` | `regardingobjectid_desktopflowbinary` |
| `desktopflowmodule_BulkDeleteFailures` | [desktopflowmodule](desktopflowmodule.md) | `regardingobjectid` | `regardingobjectid_desktopflowmodule` |
| `DisplayString_BulkDeleteFailures` | [displaystring](displaystring.md) | `regardingobjectid` | `regardingobjectid_displaystring` |
| `dvfilesearch_BulkDeleteFailures` | [dvfilesearch](dvfilesearch.md) | `regardingobjectid` | `regardingobjectid_dvfilesearch` |
| `dvfilesearchattribute_BulkDeleteFailures` | [dvfilesearchattribute](dvfilesearchattribute.md) | `regardingobjectid` | `regardingobjectid_dvfilesearchattribute` |
| `dvfilesearchentity_BulkDeleteFailures` | [dvfilesearchentity](dvfilesearchentity.md) | `regardingobjectid` | `regardingobjectid_dvfilesearchentity` |
| `dvtablesearch_BulkDeleteFailures` | [dvtablesearch](dvtablesearch.md) | `regardingobjectid` | `regardingobjectid_dvtablesearch` |
| `dvtablesearchattribute_BulkDeleteFailures` | [dvtablesearchattribute](dvtablesearchattribute.md) | `regardingobjectid` | `regardingobjectid_dvtablesearchattribute` |
| `dvtablesearchentity_BulkDeleteFailures` | [dvtablesearchentity](dvtablesearchentity.md) | `regardingobjectid` | `regardingobjectid_dvtablesearchentity` |
| `Email_BulkDeleteFailures` | [email](email.md) | `regardingobjectid` | `regardingobjectid_email` |
| `emailaddressconfiguration_BulkDeleteFailures` | [emailaddressconfiguration](emailaddressconfiguration.md) | `regardingobjectid` | `regardingobjectid_emailaddressconfiguration` |
| `emailserverprofile_bulkdeletefailures` | [emailserverprofile](emailserverprofile.md) | `regardingobjectid` | `regardingobjectid_emailserverprofile` |
| `entityanalyticsconfig_BulkDeleteFailures` | [entityanalyticsconfig](entityanalyticsconfig.md) | `regardingobjectid` | `regardingobjectid_entityanalyticsconfig` |
| `entityclusterconfig_BulkDeleteFailures` | [entityclusterconfig](entityclusterconfig.md) | `regardingobjectid` | `regardingobjectid_entityclusterconfig` |
| `entityimageconfig_BulkDeleteFailures` | [entityimageconfig](entityimageconfig.md) | `regardingobjectid` | `regardingobjectid_entityimageconfig` |
| `entityindex_BulkDeleteFailures` | [entityindex](entityindex.md) | `regardingobjectid` | `regardingobjectid_entityindex` |
| `entityrecordfilter_BulkDeleteFailures` | [entityrecordfilter](entityrecordfilter.md) | `regardingobjectid` | `regardingobjectid_entityrecordfilter` |
| `environmentvariabledefinition_BulkDeleteFailures` | [environmentvariabledefinition](environmentvariabledefinition.md) | `regardingobjectid` | `regardingobjectid_environmentvariabledefinition` |
| `environmentvariablevalue_BulkDeleteFailures` | [environmentvariablevalue](environmentvariablevalue.md) | `regardingobjectid` | `regardingobjectid_environmentvariablevalue` |
| `exportedexcel_BulkDeleteFailures` | [exportedexcel](exportedexcel.md) | `regardingobjectid` | `regardingobjectid_exportedexcel` |
| `exportsolutionupload_BulkDeleteFailures` | [exportsolutionupload](exportsolutionupload.md) | `regardingobjectid` | `regardingobjectid_exportsolutionupload` |
| `fabricaiskill_BulkDeleteFailures` | [fabricaiskill](fabricaiskill.md) | `regardingobjectid` | `regardingobjectid_fabricaiskill` |
| `Fax_BulkDeleteFailures` | [fax](fax.md) | `regardingobjectid` | `regardingobjectid_fax` |
| `featurecontrolsetting_BulkDeleteFailures` | [featurecontrolsetting](featurecontrolsetting.md) | `regardingobjectid` | `regardingobjectid_featurecontrolsetting` |
| `federatedknowledgeconfiguration_BulkDeleteFailures` | [federatedknowledgeconfiguration](federatedknowledgeconfiguration.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgeconfiguration` |
| `federatedknowledgeentityconfiguration_BulkDeleteFailures` | [federatedknowledgeentityconfiguration](federatedknowledgeentityconfiguration.md) | `regardingobjectid` | `regardingobjectid_federatedknowledgeentityconfiguration` |
| `FixedMonthlyFiscalCalendar_BulkDeleteFailures` | [fixedmonthlyfiscalcalendar](fixedmonthlyfiscalcalendar.md) | `regardingobjectid` | `regardingobjectid_fixedmonthlyfiscalcalendar` |
| `flowcapacityassignment_BulkDeleteFailures` | [flowcapacityassignment](flowcapacityassignment.md) | `regardingobjectid` | `regardingobjectid_flowcapacityassignment` |
| `flowcredentialapplication_BulkDeleteFailures` | [flowcredentialapplication](flowcredentialapplication.md) | `regardingobjectid` | `regardingobjectid_flowcredentialapplication` |
| `flowevent_BulkDeleteFailures` | [flowevent](flowevent.md) | `regardingobjectid` | `regardingobjectid_flowevent` |
| `flowmachine_BulkDeleteFailures` | [flowmachine](flowmachine.md) | `regardingobjectid` | `regardingobjectid_flowmachine` |
| `flowmachinegroup_BulkDeleteFailures` | [flowmachinegroup](flowmachinegroup.md) | `regardingobjectid` | `regardingobjectid_flowmachinegroup` |
| `flowmachineimage_BulkDeleteFailures` | [flowmachineimage](flowmachineimage.md) | `regardingobjectid` | `regardingobjectid_flowmachineimage` |
| `flowmachineimageversion_BulkDeleteFailures` | [flowmachineimageversion](flowmachineimageversion.md) | `regardingobjectid` | `regardingobjectid_flowmachineimageversion` |
| `flowmachinenetwork_BulkDeleteFailures` | [flowmachinenetwork](flowmachinenetwork.md) | `regardingobjectid` | `regardingobjectid_flowmachinenetwork` |
| `flowsession_BulkDeleteFailures` | [flowsession](flowsession.md) | `regardingobjectid` | `regardingobjectid_flowsession` |
| `flowsessionbinary_BulkDeleteFailures` | [flowsessionbinary](flowsessionbinary.md) | `regardingobjectid` | `regardingobjectid_flowsessionbinary` |
| `fxexpression_BulkDeleteFailures` | [fxexpression](fxexpression.md) | `regardingobjectid` | `regardingobjectid_fxexpression` |
| `governanceconfiguration_BulkDeleteFailures` | [governanceconfiguration](governanceconfiguration.md) | `regardingobjectid` | `regardingobjectid_governanceconfiguration` |
| `Import_BulkDeleteFailures` | [import](import.md) | `regardingobjectid` | `regardingobjectid_import` |
| `ImportData_BulkDeleteFailures` | [importdata](importdata.md) | `regardingobjectid` | `regardingobjectid_importdata` |
| `ImportFile_BulkDeleteFailures` | [importfile](importfile.md) | `regardingobjectid` | `regardingobjectid_importfile` |
| `ImportLog_BulkDeleteFailures` | [importlog](importlog.md) | `regardingobjectid` | `regardingobjectid_importlog` |
| `ImportMap_BulkDeleteFailures` | [importmap](importmap.md) | `regardingobjectid` | `regardingobjectid_importmap` |
| `indexattributes_BulkDeleteFailures` | [indexattributes](indexattributes.md) | `regardingobjectid` | `regardingobjectid_indexattributes` |
| `KbArticle_BulkDeleteFailures` | [kbarticle](kbarticle.md) | `regardingobjectid` | `regardingobjectid_kbarticle` |
| `KbArticleComment_BulkDeleteFailures` | [kbarticlecomment](kbarticlecomment.md) | `regardingobjectid` | `regardingobjectid_kbarticlecomment` |
| `KbArticleTemplate_BulkDeleteFailures` | [kbarticletemplate](kbarticletemplate.md) | `regardingobjectid` | `regardingobjectid_kbarticletemplate` |
| `keyvaultreference_BulkDeleteFailures` | [keyvaultreference](keyvaultreference.md) | `regardingobjectid` | `regardingobjectid_keyvaultreference` |
| `knowledgearticle_BulkDeleteFailures` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle` |
| `KnowledgeBaseRecord_BulkDeleteFailures` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord` |
| `knowledgefaq_BulkDeleteFailures` | [knowledgefaq](knowledgefaq.md) | `regardingobjectid` | `regardingobjectid_knowledgefaq` |
| `Letter_BulkDeleteFailures` | [letter](letter.md) | `regardingobjectid` | `regardingobjectid_letter` |
| `mainfewshot_BulkDeleteFailures` | [mainfewshot](mainfewshot.md) | `regardingobjectid` | `regardingobjectid_mainfewshot` |
| `makerfewshot_BulkDeleteFailures` | [makerfewshot](makerfewshot.md) | `regardingobjectid` | `regardingobjectid_makerfewshot` |
| `managedidentity_BulkDeleteFailures` | [managedidentity](managedidentity.md) | `regardingobjectid` | `regardingobjectid_managedidentity` |
| `maskingrule_BulkDeleteFailures` | [maskingrule](maskingrule.md) | `regardingobjectid` | `regardingobjectid_maskingrule` |
| `mcpserver_BulkDeleteFailures` | [mcpserver](mcpserver.md) | `regardingobjectid` | `regardingobjectid_mcpserver` |
| `mcptool_BulkDeleteFailures` | [mcptool](mcptool.md) | `regardingobjectid` | `regardingobjectid_mcptool` |
| `metadataforarchival_BulkDeleteFailures` | [metadataforarchival](metadataforarchival.md) | `regardingobjectid` | `regardingobjectid_metadataforarchival` |
| `mobileofflineprofileextension_BulkDeleteFailures` | [mobileofflineprofileextension](mobileofflineprofileextension.md) | `regardingobjectid` | `regardingobjectid_mobileofflineprofileextension` |
| `MonthlyFiscalCalendar_BulkDeleteFailures` | [monthlyfiscalcalendar](monthlyfiscalcalendar.md) | `regardingobjectid` | `regardingobjectid_monthlyfiscalcalendar` |
| `msdyn_aibdataset_BulkDeleteFailures` | [msdyn_aibdataset](msdyn_aibdataset.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdataset` |
| `msdyn_aibdatasetfile_BulkDeleteFailures` | [msdyn_aibdatasetfile](msdyn_aibdatasetfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetfile` |
| `msdyn_aibdatasetrecord_BulkDeleteFailures` | [msdyn_aibdatasetrecord](msdyn_aibdatasetrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetrecord` |
| `msdyn_aibdatasetscontainer_BulkDeleteFailures` | [msdyn_aibdatasetscontainer](msdyn_aibdatasetscontainer.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetscontainer` |
| `msdyn_aibfeedbackloop_BulkDeleteFailures` | [msdyn_aibfeedbackloop](msdyn_aibfeedbackloop.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfeedbackloop` |
| `msdyn_aibfile_BulkDeleteFailures` | [msdyn_aibfile](msdyn_aibfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfile` |
| `msdyn_aibfileattacheddata_BulkDeleteFailures` | [msdyn_aibfileattacheddata](msdyn_aibfileattacheddata.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfileattacheddata` |
| `msdyn_aiconfiguration_BulkDeleteFailures` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiconfiguration` |
| `msdyn_aidataprocessingevent_BulkDeleteFailures` | [msdyn_aidataprocessingevent](msdyn_aidataprocessingevent.md) | `regardingobjectid` | `regardingobjectid_msdyn_aidataprocessingevent` |
| `msdyn_aidocumenttemplate_BulkDeleteFailures` | [msdyn_aidocumenttemplate](msdyn_aidocumenttemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_aidocumenttemplate` |
| `msdyn_aievaluationconfiguration_BulkDeleteFailures` | [msdyn_aievaluationconfiguration](msdyn_aievaluationconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievaluationconfiguration` |
| `msdyn_aievaluationrun_BulkDeleteFailures` | [msdyn_aievaluationrun](msdyn_aievaluationrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievaluationrun` |
| `msdyn_aievent_BulkDeleteFailures` | [msdyn_aievent](msdyn_aievent.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievent` |
| `msdyn_aifptrainingdocument_BulkDeleteFailures` | [msdyn_aifptrainingdocument](msdyn_aifptrainingdocument.md) | `regardingobjectid` | `regardingobjectid_msdyn_aifptrainingdocument` |
| `msdyn_aimodel_BulkDeleteFailures` | [msdyn_aimodel](msdyn_aimodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_aimodel` |
| `msdyn_aiodimage_BulkDeleteFailures` | [msdyn_aiodimage](msdyn_aiodimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodimage` |
| `msdyn_aiodlabel_BulkDeleteFailures` | [msdyn_aiodlabel](msdyn_aiodlabel.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodlabel` |
| `msdyn_aiodtrainingboundingbox_BulkDeleteFailures` | [msdyn_aiodtrainingboundingbox](msdyn_aiodtrainingboundingbox.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodtrainingboundingbox` |
| `msdyn_aiodtrainingimage_BulkDeleteFailures` | [msdyn_aiodtrainingimage](msdyn_aiodtrainingimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodtrainingimage` |
| `msdyn_aitemplate_BulkDeleteFailures` | [msdyn_aitemplate](msdyn_aitemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitemplate` |
| `msdyn_aitestcase_BulkDeleteFailures` | [msdyn_aitestcase](msdyn_aitestcase.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcase` |
| `msdyn_aitestcasedocument_BulkDeleteFailures` | [msdyn_aitestcasedocument](msdyn_aitestcasedocument.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcasedocument` |
| `msdyn_aitestcaseinput_BulkDeleteFailures` | [msdyn_aitestcaseinput](msdyn_aitestcaseinput.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestcaseinput` |
| `msdyn_aitestrun_BulkDeleteFailures` | [msdyn_aitestrun](msdyn_aitestrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestrun` |
| `msdyn_aitestrunbatch_BulkDeleteFailures` | [msdyn_aitestrunbatch](msdyn_aitestrunbatch.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestrunbatch` |
| `msdyn_analysiscomponent_BulkDeleteFailures` | [msdyn_analysiscomponent](msdyn_analysiscomponent.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysiscomponent` |
| `msdyn_analysisjob_BulkDeleteFailures` | [msdyn_analysisjob](msdyn_analysisjob.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisjob` |
| `msdyn_analysisoverride_BulkDeleteFailures` | [msdyn_analysisoverride](msdyn_analysisoverride.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisoverride` |
| `msdyn_analysisresult_BulkDeleteFailures` | [msdyn_analysisresult](msdyn_analysisresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisresult` |
| `msdyn_analysisresultdetail_BulkDeleteFailures` | [msdyn_analysisresultdetail](msdyn_analysisresultdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisresultdetail` |
| `msdyn_appinsightsmetadata_BulkDeleteFailures` | [msdyn_appinsightsmetadata](msdyn_appinsightsmetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_appinsightsmetadata` |
| `msdyn_copilotinteractions_BulkDeleteFailures` | [msdyn_copilotinteractions](msdyn_copilotinteractions.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotinteractions` |
| `msdyn_customcontrolextendedsettings_BulkDeleteFailures` | [msdyn_customcontrolextendedsettings](msdyn_customcontrolextendedsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_customcontrolextendedsettings` |
| `msdyn_dataflow_BulkDeleteFailures` | [msdyn_dataflow](msdyn_dataflow.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflow` |
| `msdyn_dataflow_datalakefolder_BulkDeleteFailures` | [msdyn_dataflow_datalakefolder](msdyn_dataflow_datalakefolder.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflow_datalakefolder` |
| `msdyn_dataflowconnectionreference_BulkDeleteFailures` | [msdyn_dataflowconnectionreference](msdyn_dataflowconnectionreference.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowconnectionreference` |
| `msdyn_dataflowrefreshhistory_BulkDeleteFailures` | [msdyn_dataflowrefreshhistory](msdyn_dataflowrefreshhistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowrefreshhistory` |
| `msdyn_dataflowtemplate_BulkDeleteFailures` | [msdyn_dataflowtemplate](msdyn_dataflowtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowtemplate` |
| `msdyn_dmsrequest_BulkDeleteFailures` | [msdyn_dmsrequest](msdyn_dmsrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmsrequest` |
| `msdyn_dmsrequeststatus_BulkDeleteFailures` | [msdyn_dmsrequeststatus](msdyn_dmsrequeststatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmsrequeststatus` |
| `msdyn_dmssyncrequest_BulkDeleteFailures` | [msdyn_dmssyncrequest](msdyn_dmssyncrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmssyncrequest` |
| `msdyn_dmssyncstatus_BulkDeleteFailures` | [msdyn_dmssyncstatus](msdyn_dmssyncstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmssyncstatus` |
| `msdyn_entitylinkchatconfiguration_BulkDeleteFailures` | [msdyn_entitylinkchatconfiguration](msdyn_entitylinkchatconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_entitylinkchatconfiguration` |
| `msdyn_entityrefreshhistory_BulkDeleteFailures` | [msdyn_entityrefreshhistory](msdyn_entityrefreshhistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityrefreshhistory` |
| `msdyn_favoriteknowledgearticle_BulkDeleteFailures` | [msdyn_favoriteknowledgearticle](msdyn_favoriteknowledgearticle.md) | `regardingobjectid` | `regardingobjectid_msdyn_favoriteknowledgearticle` |
| `msdyn_federatedarticle_BulkDeleteFailures` | [msdyn_federatedarticle](msdyn_federatedarticle.md) | `regardingobjectid` | `regardingobjectid_msdyn_federatedarticle` |
| `msdyn_federatedarticleincident_BulkDeleteFailures` | [msdyn_federatedarticleincident](msdyn_federatedarticleincident.md) | `regardingobjectid` | `regardingobjectid_msdyn_federatedarticleincident` |
| `msdyn_fileupload_BulkDeleteFailures` | [msdyn_fileupload](msdyn_fileupload.md) | `regardingobjectid` | `regardingobjectid_msdyn_fileupload` |
| `msdyn_flow_actionapprovalmodel_BulkDeleteFailures` | [msdyn_flow_actionapprovalmodel](msdyn_flow_actionapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_actionapprovalmodel` |
| `msdyn_flow_approval_BulkDeleteFailures` | [msdyn_flow_approval](msdyn_flow_approval.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approval` |
| `msdyn_flow_approvalrequest_BulkDeleteFailures` | [msdyn_flow_approvalrequest](msdyn_flow_approvalrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalrequest` |
| `msdyn_flow_approvalresponse_BulkDeleteFailures` | [msdyn_flow_approvalresponse](msdyn_flow_approvalresponse.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalresponse` |
| `msdyn_flow_approvalstep_BulkDeleteFailures` | [msdyn_flow_approvalstep](msdyn_flow_approvalstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalstep` |
| `msdyn_flow_awaitallactionapprovalmodel_BulkDeleteFailures` | [msdyn_flow_awaitallactionapprovalmodel](msdyn_flow_awaitallactionapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_awaitallactionapprovalmodel` |
| `msdyn_flow_awaitallapprovalmodel_BulkDeleteFailures` | [msdyn_flow_awaitallapprovalmodel](msdyn_flow_awaitallapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_awaitallapprovalmodel` |
| `msdyn_flow_basicapprovalmodel_BulkDeleteFailures` | [msdyn_flow_basicapprovalmodel](msdyn_flow_basicapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_basicapprovalmodel` |
| `msdyn_flow_flowapproval_BulkDeleteFailures` | [msdyn_flow_flowapproval](msdyn_flow_flowapproval.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_flowapproval` |
| `msdyn_formmapping_BulkDeleteFailures` | [msdyn_formmapping](msdyn_formmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_formmapping` |
| `msdyn_function_BulkDeleteFailures` | [msdyn_function](msdyn_function.md) | `regardingobjectid` | `regardingobjectid_msdyn_function` |
| `msdyn_helppage_BulkDeleteFailures` | [msdyn_helppage](msdyn_helppage.md) | `regardingobjectid` | `regardingobjectid_msdyn_helppage` |
| `msdyn_historicalcaseharvestbatch_BulkDeleteFailures` | [msdyn_historicalcaseharvestbatch](msdyn_historicalcaseharvestbatch.md) | `regardingobjectid` | `regardingobjectid_msdyn_historicalcaseharvestbatch` |
| `msdyn_historicalcaseharvestrun_BulkDeleteFailures` | [msdyn_historicalcaseharvestrun](msdyn_historicalcaseharvestrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_historicalcaseharvestrun` |
| `msdyn_insightsstorevirtualentity_BulkDeleteFailures` | [msdyn_insightsstorevirtualentity](msdyn_insightsstorevirtualentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_insightsstorevirtualentity` |
| `msdyn_integratedsearchprovider_BulkDeleteFailures` | [msdyn_integratedsearchprovider](msdyn_integratedsearchprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_integratedsearchprovider` |
| `msdyn_kalanguagesetting_BulkDeleteFailures` | [msdyn_kalanguagesetting](msdyn_kalanguagesetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_kalanguagesetting` |
| `msdyn_kbattachment_BulkDeleteFailures` | [msdyn_kbattachment](msdyn_kbattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_kbattachment` |
| `msdyn_kmfederatedsearchconfig_BulkDeleteFailures` | [msdyn_kmfederatedsearchconfig](msdyn_kmfederatedsearchconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_kmfederatedsearchconfig` |
| `msdyn_kmpersonalizationsetting_BulkDeleteFailures` | [msdyn_kmpersonalizationsetting](msdyn_kmpersonalizationsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_kmpersonalizationsetting` |
| `msdyn_knowledgearticleimage_BulkDeleteFailures` | [msdyn_knowledgearticleimage](msdyn_knowledgearticleimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticleimage` |
| `msdyn_knowledgearticletemplate_BulkDeleteFailures` | [msdyn_knowledgearticletemplate](msdyn_knowledgearticletemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticletemplate` |
| `msdyn_knowledgeassetconfiguration_BulkDeleteFailures` | [msdyn_knowledgeassetconfiguration](msdyn_knowledgeassetconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeassetconfiguration` |
| `msdyn_knowledgeconfiguration_BulkDeleteFailures` | [msdyn_knowledgeconfiguration](msdyn_knowledgeconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeconfiguration` |
| `msdyn_knowledgeharvestjobrecord_BulkDeleteFailures` | [msdyn_knowledgeharvestjobrecord](msdyn_knowledgeharvestjobrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeharvestjobrecord` |
| `msdyn_knowledgeinteractioninsight_BulkDeleteFailures` | [msdyn_knowledgeinteractioninsight](msdyn_knowledgeinteractioninsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgeinteractioninsight` |
| `msdyn_knowledgemanagementsetting_BulkDeleteFailures` | [msdyn_knowledgemanagementsetting](msdyn_knowledgemanagementsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgemanagementsetting` |
| `msdyn_knowledgepersonalfilter_BulkDeleteFailures` | [msdyn_knowledgepersonalfilter](msdyn_knowledgepersonalfilter.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgepersonalfilter` |
| `msdyn_knowledgesearchfilter_BulkDeleteFailures` | [msdyn_knowledgesearchfilter](msdyn_knowledgesearchfilter.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgesearchfilter` |
| `msdyn_knowledgesearchinsight_BulkDeleteFailures` | [msdyn_knowledgesearchinsight](msdyn_knowledgesearchinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgesearchinsight` |
| `msdyn_mobileapp_BulkDeleteFailures` | [msdyn_mobileapp](msdyn_mobileapp.md) | `regardingobjectid` | `regardingobjectid_msdyn_mobileapp` |
| `msdyn_modulerundetail_BulkDeleteFailures` | [msdyn_modulerundetail](msdyn_modulerundetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_modulerundetail` |
| `msdyn_pmanalysishistory_BulkDeleteFailures` | [msdyn_pmanalysishistory](msdyn_pmanalysishistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmanalysishistory` |
| `msdyn_pmbusinessruleautomationconfig_BulkDeleteFailures` | [msdyn_pmbusinessruleautomationconfig](msdyn_pmbusinessruleautomationconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmbusinessruleautomationconfig` |
| `msdyn_pmcalendar_BulkDeleteFailures` | [msdyn_pmcalendar](msdyn_pmcalendar.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmcalendar` |
| `msdyn_pmcalendarversion_BulkDeleteFailures` | [msdyn_pmcalendarversion](msdyn_pmcalendarversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmcalendarversion` |
| `msdyn_pminferredtask_BulkDeleteFailures` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `regardingobjectid` | `regardingobjectid_msdyn_pminferredtask` |
| `msdyn_pmprocessextendedmetadataversion_BulkDeleteFailures` | [msdyn_pmprocessextendedmetadataversion](msdyn_pmprocessextendedmetadataversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessextendedmetadataversion` |
| `msdyn_pmprocesstemplate_BulkDeleteFailures` | [msdyn_pmprocesstemplate](msdyn_pmprocesstemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocesstemplate` |
| `msdyn_pmprocessusersettings_BulkDeleteFailures` | [msdyn_pmprocessusersettings](msdyn_pmprocessusersettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessusersettings` |
| `msdyn_pmprocessversion_BulkDeleteFailures` | [msdyn_pmprocessversion](msdyn_pmprocessversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessversion` |
| `msdyn_pmrecording_BulkDeleteFailures` | [msdyn_pmrecording](msdyn_pmrecording.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmrecording` |
| `msdyn_pmsimulation_BulkDeleteFailures` | [msdyn_pmsimulation](msdyn_pmsimulation.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmsimulation` |
| `msdyn_pmtab_BulkDeleteFailures` | [msdyn_pmtab](msdyn_pmtab.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmtab` |
| `msdyn_pmtemplate_BulkDeleteFailures` | [msdyn_pmtemplate](msdyn_pmtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmtemplate` |
| `msdyn_pmview_BulkDeleteFailures` | [msdyn_pmview](msdyn_pmview.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmview` |
| `msdyn_qna_BulkDeleteFailures` | [msdyn_qna](msdyn_qna.md) | `regardingobjectid` | `regardingobjectid_msdyn_qna` |
| `msdyn_richtextfile_BulkDeleteFailures` | [msdyn_richtextfile](msdyn_richtextfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_richtextfile` |
| `msdyn_salesforcestructuredobject_BulkDeleteFailures` | [msdyn_salesforcestructuredobject](msdyn_salesforcestructuredobject.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesforcestructuredobject` |
| `msdyn_salesforcestructuredqnaconfig_BulkDeleteFailures` | [msdyn_salesforcestructuredqnaconfig](msdyn_salesforcestructuredqnaconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesforcestructuredqnaconfig` |
| `msdyn_schedule_BulkDeleteFailures` | [msdyn_schedule](msdyn_schedule.md) | `regardingobjectid` | `regardingobjectid_msdyn_schedule` |
| `msdyn_serviceconfiguration_BulkDeleteFailures` | [msdyn_serviceconfiguration](msdyn_serviceconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_serviceconfiguration` |
| `msdyn_slakpi_BulkDeleteFailures` | [msdyn_slakpi](msdyn_slakpi.md) | `regardingobjectid` | `regardingobjectid_msdyn_slakpi` |
| `msdyn_solutionhealthrule_BulkDeleteFailures` | [msdyn_solutionhealthrule](msdyn_solutionhealthrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthrule` |
| `msdyn_solutionhealthruleargument_BulkDeleteFailures` | [msdyn_solutionhealthruleargument](msdyn_solutionhealthruleargument.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthruleargument` |
| `msdyn_solutionhealthruleset_BulkDeleteFailures` | [msdyn_solutionhealthruleset](msdyn_solutionhealthruleset.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthruleset` |
| `msdyn_tour_BulkDeleteFailures` | [msdyn_tour](msdyn_tour.md) | `regardingobjectid` | `regardingobjectid_msdyn_tour` |
| `msdyn_virtualtablecolumncandidate_BulkDeleteFailures` | [msdyn_virtualtablecolumncandidate](msdyn_virtualtablecolumncandidate.md) | `regardingobjectid` | `regardingobjectid_msdyn_virtualtablecolumncandidate` |
| `msdyn_workflowactionstatus_BulkDeleteFailures` | [msdyn_workflowactionstatus](msdyn_workflowactionstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_workflowactionstatus` |
| `msdynce_botcontent_BulkDeleteFailures` | [msdynce_botcontent](msdynce_botcontent.md) | `regardingobjectid` | `regardingobjectid_msdynce_botcontent` |
| `msgraphresourcetosubscription_BulkDeleteFailures` | [msgraphresourcetosubscription](msgraphresourcetosubscription.md) | `regardingobjectid` | `regardingobjectid_msgraphresourcetosubscription` |
| `mspcat_catalogsubmissionfiles_BulkDeleteFailures` | [mspcat_catalogsubmissionfiles](mspcat_catalogsubmissionfiles.md) | `regardingobjectid` | `regardingobjectid_mspcat_catalogsubmissionfiles` |
| `mspcat_packagestore_BulkDeleteFailures` | [mspcat_packagestore](mspcat_packagestore.md) | `regardingobjectid` | `regardingobjectid_mspcat_packagestore` |
| `Organization_BulkDeleteFailures` | [organization](organization.md) | `regardingobjectid` | `regardingobjectid_organization` |
| `organizationdatasyncfnostate_BulkDeleteFailures` | [organizationdatasyncfnostate](organizationdatasyncfnostate.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncfnostate` |
| `organizationdatasyncstate_BulkDeleteFailures` | [organizationdatasyncstate](organizationdatasyncstate.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncstate` |
| `organizationdatasyncsubscription_BulkDeleteFailures` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscription` |
| `organizationdatasyncsubscriptionentity_BulkDeleteFailures` | [organizationdatasyncsubscriptionentity](organizationdatasyncsubscriptionentity.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscriptionentity` |
| `organizationdatasyncsubscriptionfnotable_BulkDeleteFailures` | [organizationdatasyncsubscriptionfnotable](organizationdatasyncsubscriptionfnotable.md) | `regardingobjectid` | `regardingobjectid_organizationdatasyncsubscriptionfnotable` |
| `package_BulkDeleteFailures` | [package](package.md) | `regardingobjectid` | `regardingobjectid_package` |
| `packagehistory_BulkDeleteFailures` | [packagehistory](packagehistory.md) | `regardingobjectid` | `regardingobjectid_packagehistory` |
| `PhoneCall_BulkDeleteFailures` | [phonecall](phonecall.md) | `regardingobjectid` | `regardingobjectid_phonecall` |
| `plannerbusinessscenario_BulkDeleteFailures` | [plannerbusinessscenario](plannerbusinessscenario.md) | `regardingobjectid` | `regardingobjectid_plannerbusinessscenario` |
| `plannersyncaction_BulkDeleteFailures` | [plannersyncaction](plannersyncaction.md) | `regardingobjectid` | `regardingobjectid_plannersyncaction` |
| `plugin_BulkDeleteFailures` | [plugin](plugin.md) | `regardingobjectid` | `regardingobjectid_plugin` |
| `pluginpackage_BulkDeleteFailures` | [pluginpackage](pluginpackage.md) | `regardingobjectid` | `regardingobjectid_pluginpackage` |
| `post_BulkDeleteFailures` | [post](post.md) | `regardingobjectid` | `regardingobjectid_post` |
| `powerbidataset_BulkDeleteFailures` | [powerbidataset](powerbidataset.md) | `regardingobjectid` | `regardingobjectid_powerbidataset` |
| `powerbidatasetapdx_BulkDeleteFailures` | [powerbidatasetapdx](powerbidatasetapdx.md) | `regardingobjectid` | `regardingobjectid_powerbidatasetapdx` |
| `powerbimashupparameter_BulkDeleteFailures` | [powerbimashupparameter](powerbimashupparameter.md) | `regardingobjectid` | `regardingobjectid_powerbimashupparameter` |
| `powerbireport_BulkDeleteFailures` | [powerbireport](powerbireport.md) | `regardingobjectid` | `regardingobjectid_powerbireport` |
| `powerbireportapdx_BulkDeleteFailures` | [powerbireportapdx](powerbireportapdx.md) | `regardingobjectid` | `regardingobjectid_powerbireportapdx` |
| `powerfxrule_BulkDeleteFailures` | [powerfxrule](powerfxrule.md) | `regardingobjectid` | `regardingobjectid_powerfxrule` |
| `powerpagecomponent_BulkDeleteFailures` | [powerpagecomponent](powerpagecomponent.md) | `regardingobjectid` | `regardingobjectid_powerpagecomponent` |
| `powerpagesddosalert_BulkDeleteFailures` | [powerpagesddosalert](powerpagesddosalert.md) | `regardingobjectid` | `regardingobjectid_powerpagesddosalert` |
| `powerpagesite_BulkDeleteFailures` | [powerpagesite](powerpagesite.md) | `regardingobjectid` | `regardingobjectid_powerpagesite` |
| `powerpagesitelanguage_BulkDeleteFailures` | [powerpagesitelanguage](powerpagesitelanguage.md) | `regardingobjectid` | `regardingobjectid_powerpagesitelanguage` |
| `powerpagesitepublished_BulkDeleteFailures` | [powerpagesitepublished](powerpagesitepublished.md) | `regardingobjectid` | `regardingobjectid_powerpagesitepublished` |
| `powerpagesmanagedidentity_BulkDeleteFailures` | [powerpagesmanagedidentity](powerpagesmanagedidentity.md) | `regardingobjectid` | `regardingobjectid_powerpagesmanagedidentity` |
| `powerpagesscanreport_BulkDeleteFailures` | [powerpagesscanreport](powerpagesscanreport.md) | `regardingobjectid` | `regardingobjectid_powerpagesscanreport` |
| `powerpagessourcefile_BulkDeleteFailures` | [powerpagessourcefile](powerpagessourcefile.md) | `regardingobjectid` | `regardingobjectid_powerpagessourcefile` |
| `Privilege_BulkDeleteFailures` | [privilege](privilege.md) | `regardingobjectid` | `regardingobjectid_privilege` |
| `privilegecheckerlog_BulkDeleteFailures` | [privilegecheckerlog](privilegecheckerlog.md) | `regardingobjectid` | `regardingobjectid_privilegecheckerlog` |
| `privilegecheckerrun_BulkDeleteFailures` | [privilegecheckerrun](privilegecheckerrun.md) | `regardingobjectid` | `regardingobjectid_privilegecheckerrun` |
| `privilegesremovalsetting_BulkDeleteFailures` | [privilegesremovalsetting](privilegesremovalsetting.md) | `regardingobjectid` | `regardingobjectid_privilegesremovalsetting` |
| `processstageparameter_BulkDeleteFailures` | [processstageparameter](processstageparameter.md) | `regardingobjectid` | `regardingobjectid_processstageparameter` |
| `provisionlanguageforuser_BulkDeleteFailures` | [provisionlanguageforuser](provisionlanguageforuser.md) | `regardingobjectid` | `regardingobjectid_provisionlanguageforuser` |
| `purviewlabelinfo_BulkDeleteFailures` | [purviewlabelinfo](purviewlabelinfo.md) | `regardingobjectid` | `regardingobjectid_purviewlabelinfo` |
| `QuarterlyFiscalCalendar_BulkDeleteFailures` | [quarterlyfiscalcalendar](quarterlyfiscalcalendar.md) | `regardingobjectid` | `regardingobjectid_quarterlyfiscalcalendar` |
| `Queue_BulkDeleteFailures` | [queue](queue.md) | `regardingobjectid` | `regardingobjectid_queue` |
| `QueueItem_BulkDeleteFailures` | [queueitem](queueitem.md) | `regardingobjectid` | `regardingobjectid_queueitem` |
| `recordfilter_BulkDeleteFailures` | [recordfilter](recordfilter.md) | `regardingobjectid` | `regardingobjectid_recordfilter` |
| `RecurringAppointmentMaster_BulkDeleteFailures` | [recurringappointmentmaster](recurringappointmentmaster.md) | `regardingobjectid` | `regardingobjectid_recurringappointmentmaster` |
| `recyclebinconfig_BulkDeleteFailures` | [recyclebinconfig](recyclebinconfig.md) | `regardingobjectid` | `regardingobjectid_recyclebinconfig` |
| `relationshipattribute_BulkDeleteFailures` | [relationshipattribute](relationshipattribute.md) | `regardingobjectid` | `regardingobjectid_relationshipattribute` |
| `reportparameter_BulkDeleteFailures` | [reportparameter](reportparameter.md) | `regardingobjectid` | `regardingobjectid_reportparameter` |
| `retaineddataexcel_BulkDeleteFailures` | [retaineddataexcel](retaineddataexcel.md) | `regardingobjectid` | `regardingobjectid_retaineddataexcel` |
| `retentionconfig_BulkDeleteFailures` | [retentionconfig](retentionconfig.md) | `regardingobjectid` | `regardingobjectid_retentionconfig` |
| `retentionfailuredetail_BulkDeleteFailures` | [retentionfailuredetail](retentionfailuredetail.md) | `regardingobjectid` | `regardingobjectid_retentionfailuredetail` |
| `retentionoperation_BulkDeleteFailures` | [retentionoperation](retentionoperation.md) | `regardingobjectid` | `regardingobjectid_retentionoperation` |
| `retentionoperationdetail_BulkDeleteFailures` | [retentionoperationdetail](retentionoperationdetail.md) | `regardingobjectid` | `regardingobjectid_retentionoperationdetail` |
| `retentionsuccessdetail_BulkDeleteFailures` | [retentionsuccessdetail](retentionsuccessdetail.md) | `regardingobjectid` | `regardingobjectid_retentionsuccessdetail` |
| `Role_BulkDeleteFailures` | [role](role.md) | `regardingobjectid` | `regardingobjectid_role` |
| `roleeditorlayout_BulkDeleteFailures` | [roleeditorlayout](roleeditorlayout.md) | `regardingobjectid` | `regardingobjectid_roleeditorlayout` |
| `sa_suggestedaction_BulkDeleteFailures` | [sa_suggestedaction](sa_suggestedaction.md) | `regardingobjectid` | `regardingobjectid_sa_suggestedaction` |
| `sa_suggestedactioncriteria_BulkDeleteFailures` | [sa_suggestedactioncriteria](sa_suggestedactioncriteria.md) | `regardingobjectid` | `regardingobjectid_sa_suggestedactioncriteria` |
| `SavedQuery_BulkDeleteFailures` | [savedquery](savedquery.md) | `regardingobjectid` | `regardingobjectid_savedquery` |
| `savingrule_BulkDeleteFailures` | [savingrule](savingrule.md) | `regardingobjectid` | `regardingobjectid_savingrule` |
| `searchattributesettings_BulkDeleteFailures` | [searchattributesettings](searchattributesettings.md) | `regardingobjectid` | `regardingobjectid_searchattributesettings` |
| `searchcustomanalyzer_BulkDeleteFailures` | [searchcustomanalyzer](searchcustomanalyzer.md) | `regardingobjectid` | `regardingobjectid_searchcustomanalyzer` |
| `searchrelationshipsettings_BulkDeleteFailures` | [searchrelationshipsettings](searchrelationshipsettings.md) | `regardingobjectid` | `regardingobjectid_searchrelationshipsettings` |
| `SemiAnnualFiscalCalendar_BulkDeleteFailures` | [semiannualfiscalcalendar](semiannualfiscalcalendar.md) | `regardingobjectid` | `regardingobjectid_semiannualfiscalcalendar` |
| `sensitivitylabelattributemapping_BulkDeleteFailures` | [sensitivitylabelattributemapping](sensitivitylabelattributemapping.md) | `regardingobjectid` | `regardingobjectid_sensitivitylabelattributemapping` |
| `serviceplan_BulkDeleteFailures` | [serviceplan](serviceplan.md) | `regardingobjectid` | `regardingobjectid_serviceplan` |
| `serviceplanmapping_BulkDeleteFailures` | [serviceplanmapping](serviceplanmapping.md) | `regardingobjectid` | `regardingobjectid_serviceplanmapping` |
| `sharedlinksetting_BulkDeleteFailures` | [sharedlinksetting](sharedlinksetting.md) | `regardingobjectid` | `regardingobjectid_sharedlinksetting` |
| `sharedobject_BulkDeleteFailures` | [sharedobject](sharedobject.md) | `regardingobjectid` | `regardingobjectid_sharedobject` |
| `sharedworkspace_BulkDeleteFailures` | [sharedworkspace](sharedworkspace.md) | `regardingobjectid` | `regardingobjectid_sharedworkspace` |
| `sharedworkspacepool_BulkDeleteFailures` | [sharedworkspacepool](sharedworkspacepool.md) | `regardingobjectid` | `regardingobjectid_sharedworkspacepool` |
| `sharepointmanagedidentity_BulkDeleteFailures` | [sharepointmanagedidentity](sharepointmanagedidentity.md) | `regardingobjectid` | `regardingobjectid_sharepointmanagedidentity` |
| `sideloadedaiplugin_BulkDeleteFailures` | [sideloadedaiplugin](sideloadedaiplugin.md) | `regardingobjectid` | `regardingobjectid_sideloadedaiplugin` |
| `slabase_BulkDeleteFailures` | [sla](sla.md) | `regardingobjectid` | `regardingobjectid_sla` |
| `SocialActivity_BulkDeleteFailures` | [socialactivity](socialactivity.md) | `regardingobjectid` | `regardingobjectid_socialactivity` |
| `solutioncomponentattributeconfiguration_BulkDeleteFailures` | [solutioncomponentattributeconfiguration](solutioncomponentattributeconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentattributeconfiguration` |
| `solutioncomponentbatchconfiguration_BulkDeleteFailures` | [solutioncomponentbatchconfiguration](solutioncomponentbatchconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentbatchconfiguration` |
| `solutioncomponentconfiguration_BulkDeleteFailures` | [solutioncomponentconfiguration](solutioncomponentconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentconfiguration` |
| `solutioncomponentrelationshipconfiguration_BulkDeleteFailures` | [solutioncomponentrelationshipconfiguration](solutioncomponentrelationshipconfiguration.md) | `regardingobjectid` | `regardingobjectid_solutioncomponentrelationshipconfiguration` |
| `stagedentity_BulkDeleteFailures` | [stagedentity](stagedentity.md) | `regardingobjectid` | `regardingobjectid_stagedentity` |
| `stagedentityattribute_BulkDeleteFailures` | [stagedentityattribute](stagedentityattribute.md) | `regardingobjectid` | `regardingobjectid_stagedentityattribute` |
| `stagedmetadataasyncoperation_BulkDeleteFailures` | [stagedmetadataasyncoperation](stagedmetadataasyncoperation.md) | `regardingobjectid` | `regardingobjectid_stagedmetadataasyncoperation` |
| `stagesolutionupload_BulkDeleteFailures` | [stagesolutionupload](stagesolutionupload.md) | `regardingobjectid` | `regardingobjectid_stagesolutionupload` |
| `Subject_BulkDeleteFailures` | [subject](subject.md) | `regardingobjectid` | `regardingobjectid_subject` |
| `supportusertable_BulkDeleteFailures` | [supportusertable](supportusertable.md) | `regardingobjectid` | `regardingobjectid_supportusertable` |
| `synapsedatabase_BulkDeleteFailures` | [synapsedatabase](synapsedatabase.md) | `regardingobjectid` | `regardingobjectid_synapsedatabase` |
| `synapselinkexternaltablestate_BulkDeleteFailures` | [synapselinkexternaltablestate](synapselinkexternaltablestate.md) | `regardingobjectid` | `regardingobjectid_synapselinkexternaltablestate` |
| `synapselinkprofile_BulkDeleteFailures` | [synapselinkprofile](synapselinkprofile.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofile` |
| `synapselinkprofileentity_BulkDeleteFailures` | [synapselinkprofileentity](synapselinkprofileentity.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofileentity` |
| `synapselinkprofileentitystate_BulkDeleteFailures` | [synapselinkprofileentitystate](synapselinkprofileentitystate.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofileentitystate` |
| `synapselinkschedule_BulkDeleteFailures` | [synapselinkschedule](synapselinkschedule.md) | `regardingobjectid` | `regardingobjectid_synapselinkschedule` |
| `SystemForm_BulkDeleteFailures` | [systemform](systemform.md) | `regardingobjectid` | `regardingobjectid_systemform` |
| `SystemUser_BulkDeleteFailures` | [systemuser](systemuser.md) | `regardingobjectid` | `regardingobjectid_systemuser` |
| `systemuserauthorizationchangetracker_BulkDeleteFailures` | [systemuserauthorizationchangetracker](systemuserauthorizationchangetracker.md) | `regardingobjectid` | `regardingobjectid_systemuserauthorizationchangetracker` |
| `tag_BulkDeleteFailures` | [tag](tag.md) | `regardingobjectid` | `regardingobjectid_tag` |
| `taggedflowsession_BulkDeleteFailures` | [taggedflowsession](taggedflowsession.md) | `regardingobjectid` | `regardingobjectid_taggedflowsession` |
| `taggedprocess_BulkDeleteFailures` | [taggedprocess](taggedprocess.md) | `regardingobjectid` | `regardingobjectid_taggedprocess` |
| `Task_BulkDeleteFailures` | [task](task.md) | `regardingobjectid` | `regardingobjectid_task` |
| `Team_BulkDeleteFailures` | [team](team.md) | `regardingobjectid` | `regardingobjectid_team` |
| `teammobileofflineprofilemembership_BulkDeleteFailures` | [teammobileofflineprofilemembership](teammobileofflineprofilemembership.md) | `regardingobjectid` | `regardingobjectid_teammobileofflineprofilemembership` |
| `Template_BulkDeleteFailures` | [template](template.md) | `regardingobjectid` | `regardingobjectid_template` |
| `Territory_BulkDeleteFailures` | [territory](territory.md) | `regardingobjectid` | `regardingobjectid_territory` |
| `theme_BulkDeleteFailures` | [theme](theme.md) | `regardingobjectid` | `regardingobjectid_theme` |
| `unstructuredfilesearchentity_BulkDeleteFailures` | [unstructuredfilesearchentity](unstructuredfilesearchentity.md) | `regardingobjectid` | `regardingobjectid_unstructuredfilesearchentity` |
| `unstructuredfilesearchrecord_BulkDeleteFailures` | [unstructuredfilesearchrecord](unstructuredfilesearchrecord.md) | `regardingobjectid` | `regardingobjectid_unstructuredfilesearchrecord` |
| `UserForm_BulkDeleteFailures` | [userform](userform.md) | `regardingobjectid` | `regardingobjectid_userform` |
| `usermapping_BulkDeleteFailures` | [usermapping](usermapping.md) | `regardingobjectid` | `regardingobjectid_usermapping` |
| `usermobileofflineprofilemembership_BulkDeleteFailures` | [usermobileofflineprofilemembership](usermobileofflineprofilemembership.md) | `regardingobjectid` | `regardingobjectid_usermobileofflineprofilemembership` |
| `UserQuery_BulkDeleteFailures` | [userquery](userquery.md) | `regardingobjectid` | `regardingobjectid_userquery` |
| `userrating_BulkDeleteFailures` | [userrating](userrating.md) | `regardingobjectid` | `regardingobjectid_userrating` |
| `viewasexamplequestion_BulkDeleteFailures` | [viewasexamplequestion](viewasexamplequestion.md) | `regardingobjectid` | `regardingobjectid_viewasexamplequestion` |
| `virtualentitymetadata_BulkDeleteFailures` | [virtualentitymetadata](virtualentitymetadata.md) | `regardingobjectid` | `regardingobjectid_virtualentitymetadata` |
| `workflowbinary_BulkDeleteFailures` | [workflowbinary](workflowbinary.md) | `regardingobjectid` | `regardingobjectid_workflowbinary` |
| `workflowmetadata_BulkDeleteFailures` | [workflowmetadata](workflowmetadata.md) | `regardingobjectid` | `regardingobjectid_workflowmetadata` |
| `workqueue_BulkDeleteFailures` | [workqueue](workqueue.md) | `regardingobjectid` | `regardingobjectid_workqueue` |
| `workqueueitem_BulkDeleteFailures` | [workqueueitem](workqueueitem.md) | `regardingobjectid` | `regardingobjectid_workqueueitem` |



## Source

Generated from [bulkdeletefailure.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/bulkdeletefailure.md) on 2026-05-06.