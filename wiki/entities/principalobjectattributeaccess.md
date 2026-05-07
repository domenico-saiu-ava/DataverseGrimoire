---
logical: "principalobjectattributeaccess"
display: "Field Sharing"
entitySetName: "principalobjectattributeaccessset"
primaryId: "principalobjectattributeaccessid"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Field Sharing

Defines CRM security principals (users and teams) access rights to secured field for an entity instance.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `principalobjectattributeaccess` |
| Display name | Field Sharing |
| Display (plural) | Field Sharing |
| Schema name | `PrincipalObjectAttributeAccess` |
| Entity set (Web API) | `principalobjectattributeaccessset` |
| Primary id attribute | `principalobjectattributeaccessid` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/principalobjectattributeaccessset?$select=&$top=10
GET /api/data/v9.2/principalobjectattributeaccessset(<guid>)
POST /api/data/v9.2/principalobjectattributeaccessset
PATCH /api/data/v9.2/principalobjectattributeaccessset(<guid>)
DELETE /api/data/v9.2/principalobjectattributeaccessset(<guid>)
```

## Attributes

Writable: **8** · Read-only: **2**

### Writable

`AttributeId`, `ObjectId`, `ObjectTypeCode`, `PrincipalId`, `PrincipalIdType`, `PrincipalObjectAttributeAccessId`, `ReadAccess`, `UpdateAccess`

### Read-only

`OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (339)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_principalobjectattributeaccess` | [account](account.md) | `objectid` | `objectid_account` |
| `activityfileattachment_PrincipalObjectAttributeAccesses` | [activityfileattachment](activityfileattachment.md) | `objectid` | `objectid_activityfileattachment` |
| `adx_externalidentity_PrincipalObjectAttributeAccesses` | [adx_externalidentity](adx_externalidentity.md) | `objectid` | `objectid_adx_externalidentity` |
| `adx_invitation_PrincipalObjectAttributeAccesses` | [adx_invitation](adx_invitation.md) | `objectid` | `objectid_adx_invitation` |
| `adx_inviteredemption_PrincipalObjectAttributeAccesses` | [adx_inviteredemption](adx_inviteredemption.md) | `objectid` | `objectid_adx_inviteredemption` |
| `adx_portalcomment_PrincipalObjectAttributeAccesses` | [adx_portalcomment](adx_portalcomment.md) | `objectid` | `objectid_adx_portalcomment` |
| `adx_setting_PrincipalObjectAttributeAccesses` | [adx_setting](adx_setting.md) | `objectid` | `objectid_adx_setting` |
| `adx_webformsession_PrincipalObjectAttributeAccesses` | [adx_webformsession](adx_webformsession.md) | `objectid` | `objectid_adx_webformsession` |
| `aicopilot_PrincipalObjectAttributeAccesses` | [aicopilot](aicopilot.md) | `objectid` | `objectid_aicopilot` |
| `aiplugin_PrincipalObjectAttributeAccesses` | [aiplugin](aiplugin.md) | `objectid` | `objectid_aiplugin` |
| `aipluginauth_PrincipalObjectAttributeAccesses` | [aipluginauth](aipluginauth.md) | `objectid` | `objectid_aipluginauth` |
| `aipluginconversationstarter_PrincipalObjectAttributeAccesses` | [aipluginconversationstarter](aipluginconversationstarter.md) | `objectid` | `objectid_aipluginconversationstarter` |
| `aipluginconversationstartermapping_PrincipalObjectAttributeAccesses` | [aipluginconversationstartermapping](aipluginconversationstartermapping.md) | `objectid` | `objectid_aipluginconversationstartermapping` |
| `aipluginexternalschema_PrincipalObjectAttributeAccesses` | [aipluginexternalschema](aipluginexternalschema.md) | `objectid` | `objectid_aipluginexternalschema` |
| `aipluginexternalschemaproperty_PrincipalObjectAttributeAccesses` | [aipluginexternalschemaproperty](aipluginexternalschemaproperty.md) | `objectid` | `objectid_aipluginexternalschemaproperty` |
| `aiplugingovernance_PrincipalObjectAttributeAccesses` | [aiplugingovernance](aiplugingovernance.md) | `objectid` | `objectid_aiplugingovernance` |
| `aiplugingovernanceext_PrincipalObjectAttributeAccesses` | [aiplugingovernanceext](aiplugingovernanceext.md) | `objectid` | `objectid_aiplugingovernanceext` |
| `aiplugininstance_PrincipalObjectAttributeAccesses` | [aiplugininstance](aiplugininstance.md) | `objectid` | `objectid_aiplugininstance` |
| `aipluginoperation_PrincipalObjectAttributeAccesses` | [aipluginoperation](aipluginoperation.md) | `objectid` | `objectid_aipluginoperation` |
| `aipluginoperationparameter_PrincipalObjectAttributeAccesses` | [aipluginoperationparameter](aipluginoperationparameter.md) | `objectid` | `objectid_aipluginoperationparameter` |
| `aipluginoperationresponsetemplate_PrincipalObjectAttributeAccesses` | [aipluginoperationresponsetemplate](aipluginoperationresponsetemplate.md) | `objectid` | `objectid_aipluginoperationresponsetemplate` |
| `aiplugintitle_PrincipalObjectAttributeAccesses` | [aiplugintitle](aiplugintitle.md) | `objectid` | `objectid_aiplugintitle` |
| `aipluginusersetting_PrincipalObjectAttributeAccesses` | [aipluginusersetting](aipluginusersetting.md) | `objectid` | `objectid_aipluginusersetting` |
| `allowedmcpclient_PrincipalObjectAttributeAccesses` | [allowedmcpclient](allowedmcpclient.md) | `objectid` | `objectid_allowedmcpclient` |
| `appaction_PrincipalObjectAttributeAccesses` | [appaction](appaction.md) | `objectid` | `objectid_appaction` |
| `appactionmigration_PrincipalObjectAttributeAccesses` | [appactionmigration](appactionmigration.md) | `objectid` | `objectid_appactionmigration` |
| `appactionrule_PrincipalObjectAttributeAccesses` | [appactionrule](appactionrule.md) | `objectid` | `objectid_appactionrule` |
| `application_PrincipalObjectAttributeAccesses` | [application](application.md) | `objectid` | `objectid_application` |
| `applicationuser_PrincipalObjectAttributeAccesses` | [applicationuser](applicationuser.md) | `objectid` | `objectid_applicationuser` |
| `appointment_principalobjectattributeaccess` | [appointment](appointment.md) | `objectid` | `objectid_appointment` |
| `approvalprocess_PrincipalObjectAttributeAccesses` | [approvalprocess](approvalprocess.md) | `objectid` | `objectid_approvalprocess` |
| `approvalstageapproval_PrincipalObjectAttributeAccesses` | [approvalstageapproval](approvalstageapproval.md) | `objectid` | `objectid_approvalstageapproval` |
| `approvalstagecondition_PrincipalObjectAttributeAccesses` | [approvalstagecondition](approvalstagecondition.md) | `objectid` | `objectid_approvalstagecondition` |
| `approvalstageintelligent_PrincipalObjectAttributeAccesses` | [approvalstageintelligent](approvalstageintelligent.md) | `objectid` | `objectid_approvalstageintelligent` |
| `approvalstageorder_PrincipalObjectAttributeAccesses` | [approvalstageorder](approvalstageorder.md) | `objectid` | `objectid_approvalstageorder` |
| `attributeclusterconfig_PrincipalObjectAttributeAccesses` | [attributeclusterconfig](attributeclusterconfig.md) | `objectid` | `objectid_attributeclusterconfig` |
| `attributeimageconfig_PrincipalObjectAttributeAccesses` | [attributeimageconfig](attributeimageconfig.md) | `objectid` | `objectid_attributeimageconfig` |
| `attributemaskingrule_PrincipalObjectAttributeAccesses` | [attributemaskingrule](attributemaskingrule.md) | `objectid` | `objectid_attributemaskingrule` |
| `attributepicklistvalue_PrincipalObjectAttributeAccesses` | [attributepicklistvalue](attributepicklistvalue.md) | `objectid` | `objectid_attributepicklistvalue` |
| `bot_PrincipalObjectAttributeAccesses` | [bot](bot.md) | `objectid` | `objectid_bot` |
| `botcomponent_PrincipalObjectAttributeAccesses` | [botcomponent](botcomponent.md) | `objectid` | `objectid_botcomponent` |
| `botcomponentcollection_PrincipalObjectAttributeAccesses` | [botcomponentcollection](botcomponentcollection.md) | `objectid` | `objectid_botcomponentcollection` |
| `businessprocess_PrincipalObjectAttributeAccesses` | [businessprocess](businessprocess.md) | `objectid` | `objectid_businessprocess` |
| `businessunit_principalobjectattributeaccess` | [businessunit](businessunit.md) | `objectid` | `objectid_businessunit` |
| `card_PrincipalObjectAttributeAccesses` | [card](card.md) | `objectid` | `objectid_card` |
| `catalog_PrincipalObjectAttributeAccesses` | [catalog](catalog.md) | `objectid` | `objectid_catalog` |
| `catalogassignment_PrincipalObjectAttributeAccesses` | [catalogassignment](catalogassignment.md) | `objectid` | `objectid_catalogassignment` |
| `certificatecredential_PrincipalObjectAttributeAccesses` | [certificatecredential](certificatecredential.md) | `objectid` | `objectid_certificatecredential` |
| `chat_PrincipalObjectAttributeAccesses` | [chat](chat.md) | `objectid` | `objectid_chat` |
| `connection_principalobjectattributeaccess` | [connection](connection.md) | `objectid` | `objectid_connection` |
| `connectioninstance_PrincipalObjectAttributeAccesses` | [connectioninstance](connectioninstance.md) | `objectid` | `objectid_connectioninstance` |
| `connectionreference_PrincipalObjectAttributeAccesses` | [connectionreference](connectionreference.md) | `objectid` | `objectid_connectionreference` |
| `connector_PrincipalObjectAttributeAccesses` | [connector](connector.md) | `objectid` | `objectid_connector` |
| `contact_principalobjectattributeaccess` | [contact](contact.md) | `objectid` | `objectid_contact` |
| `conversationtranscript_PrincipalObjectAttributeAccesses` | [conversationtranscript](conversationtranscript.md) | `objectid` | `objectid_conversationtranscript` |
| `copilotexamplequestion_PrincipalObjectAttributeAccesses` | [copilotexamplequestion](copilotexamplequestion.md) | `objectid` | `objectid_copilotexamplequestion` |
| `copilotglossaryterm_PrincipalObjectAttributeAccesses` | [copilotglossaryterm](copilotglossaryterm.md) | `objectid` | `objectid_copilotglossaryterm` |
| `copilotsynonyms_PrincipalObjectAttributeAccesses` | [copilotsynonyms](copilotsynonyms.md) | `objectid` | `objectid_copilotsynonyms` |
| `credential_PrincipalObjectAttributeAccesses` | [credential](credential.md) | `objectid` | `objectid_credential` |
| `customapi_PrincipalObjectAttributeAccesses` | [customapi](customapi.md) | `objectid` | `objectid_customapi` |
| `customapirequestparameter_PrincipalObjectAttributeAccesses` | [customapirequestparameter](customapirequestparameter.md) | `objectid` | `objectid_customapirequestparameter` |
| `customapiresponseproperty_PrincipalObjectAttributeAccesses` | [customapiresponseproperty](customapiresponseproperty.md) | `objectid` | `objectid_customapiresponseproperty` |
| `customeraddress_principalobjectattributeaccess` | [customeraddress](customeraddress.md) | `objectid` | `objectid_customeraddress` |
| `datalakefolder_PrincipalObjectAttributeAccesses` | [datalakefolder](datalakefolder.md) | `objectid` | `objectid_datalakefolder` |
| `datalakefolderpermission_PrincipalObjectAttributeAccesses` | [datalakefolderpermission](datalakefolderpermission.md) | `objectid` | `objectid_datalakefolderpermission` |
| `datalakeworkspace_PrincipalObjectAttributeAccesses` | [datalakeworkspace](datalakeworkspace.md) | `objectid` | `objectid_datalakeworkspace` |
| `datalakeworkspacepermission_PrincipalObjectAttributeAccesses` | [datalakeworkspacepermission](datalakeworkspacepermission.md) | `objectid` | `objectid_datalakeworkspacepermission` |
| `dataprocessingconfiguration_PrincipalObjectAttributeAccesses` | [dataprocessingconfiguration](dataprocessingconfiguration.md) | `objectid` | `objectid_dataprocessingconfiguration` |
| `delegatedauthorization_PrincipalObjectAttributeAccesses` | [delegatedauthorization](delegatedauthorization.md) | `objectid` | `objectid_delegatedauthorization` |
| `desktopflowbinary_PrincipalObjectAttributeAccesses` | [desktopflowbinary](desktopflowbinary.md) | `objectid` | `objectid_desktopflowbinary` |
| `desktopflowmodule_PrincipalObjectAttributeAccesses` | [desktopflowmodule](desktopflowmodule.md) | `objectid` | `objectid_desktopflowmodule` |
| `dvfilesearch_PrincipalObjectAttributeAccesses` | [dvfilesearch](dvfilesearch.md) | `objectid` | `objectid_dvfilesearch` |
| `dvfilesearchattribute_PrincipalObjectAttributeAccesses` | [dvfilesearchattribute](dvfilesearchattribute.md) | `objectid` | `objectid_dvfilesearchattribute` |
| `dvfilesearchentity_PrincipalObjectAttributeAccesses` | [dvfilesearchentity](dvfilesearchentity.md) | `objectid` | `objectid_dvfilesearchentity` |
| `dvtablesearch_PrincipalObjectAttributeAccesses` | [dvtablesearch](dvtablesearch.md) | `objectid` | `objectid_dvtablesearch` |
| `dvtablesearchattribute_PrincipalObjectAttributeAccesses` | [dvtablesearchattribute](dvtablesearchattribute.md) | `objectid` | `objectid_dvtablesearchattribute` |
| `dvtablesearchentity_PrincipalObjectAttributeAccesses` | [dvtablesearchentity](dvtablesearchentity.md) | `objectid` | `objectid_dvtablesearchentity` |
| `email_principalobjectattributeaccess` | [email](email.md) | `objectid` | `objectid_email` |
| `emailaddressconfiguration_PrincipalObjectAttributeAccesses` | [emailaddressconfiguration](emailaddressconfiguration.md) | `objectid` | `objectid_emailaddressconfiguration` |
| `entityanalyticsconfig_PrincipalObjectAttributeAccesses` | [entityanalyticsconfig](entityanalyticsconfig.md) | `objectid` | `objectid_entityanalyticsconfig` |
| `entityclusterconfig_PrincipalObjectAttributeAccesses` | [entityclusterconfig](entityclusterconfig.md) | `objectid` | `objectid_entityclusterconfig` |
| `entityimageconfig_PrincipalObjectAttributeAccesses` | [entityimageconfig](entityimageconfig.md) | `objectid` | `objectid_entityimageconfig` |
| `entityindex_PrincipalObjectAttributeAccesses` | [entityindex](entityindex.md) | `objectid` | `objectid_entityindex` |
| `entityrecordfilter_PrincipalObjectAttributeAccesses` | [entityrecordfilter](entityrecordfilter.md) | `objectid` | `objectid_entityrecordfilter` |
| `environmentvariabledefinition_PrincipalObjectAttributeAccesses` | [environmentvariabledefinition](environmentvariabledefinition.md) | `objectid` | `objectid_environmentvariabledefinition` |
| `environmentvariablevalue_PrincipalObjectAttributeAccesses` | [environmentvariablevalue](environmentvariablevalue.md) | `objectid` | `objectid_environmentvariablevalue` |
| `exportedexcel_PrincipalObjectAttributeAccesses` | [exportedexcel](exportedexcel.md) | `objectid` | `objectid_exportedexcel` |
| `exportsolutionupload_PrincipalObjectAttributeAccesses` | [exportsolutionupload](exportsolutionupload.md) | `objectid` | `objectid_exportsolutionupload` |
| `fabricaiskill_PrincipalObjectAttributeAccesses` | [fabricaiskill](fabricaiskill.md) | `objectid` | `objectid_fabricaiskill` |
| `fax_principalobjectattributeaccess` | [fax](fax.md) | `objectid` | `objectid_fax` |
| `featurecontrolsetting_PrincipalObjectAttributeAccesses` | [featurecontrolsetting](featurecontrolsetting.md) | `objectid` | `objectid_featurecontrolsetting` |
| `federatedknowledgeconfiguration_PrincipalObjectAttributeAccesses` | [federatedknowledgeconfiguration](federatedknowledgeconfiguration.md) | `objectid` | `objectid_federatedknowledgeconfiguration` |
| `federatedknowledgeentityconfiguration_PrincipalObjectAttributeAccesses` | [federatedknowledgeentityconfiguration](federatedknowledgeentityconfiguration.md) | `objectid` | `objectid_federatedknowledgeentityconfiguration` |
| `feedback_principalobjectattributeaccess` | [feedback](feedback.md) | `objectid` | `objectid_feedback` |
| `flowcapacityassignment_PrincipalObjectAttributeAccesses` | [flowcapacityassignment](flowcapacityassignment.md) | `objectid` | `objectid_flowcapacityassignment` |
| `flowcredentialapplication_PrincipalObjectAttributeAccesses` | [flowcredentialapplication](flowcredentialapplication.md) | `objectid` | `objectid_flowcredentialapplication` |
| `flowevent_PrincipalObjectAttributeAccesses` | [flowevent](flowevent.md) | `objectid` | `objectid_flowevent` |
| `flowmachine_PrincipalObjectAttributeAccesses` | [flowmachine](flowmachine.md) | `objectid` | `objectid_flowmachine` |
| `flowmachinegroup_PrincipalObjectAttributeAccesses` | [flowmachinegroup](flowmachinegroup.md) | `objectid` | `objectid_flowmachinegroup` |
| `flowmachineimage_PrincipalObjectAttributeAccesses` | [flowmachineimage](flowmachineimage.md) | `objectid` | `objectid_flowmachineimage` |
| `flowmachineimageversion_PrincipalObjectAttributeAccesses` | [flowmachineimageversion](flowmachineimageversion.md) | `objectid` | `objectid_flowmachineimageversion` |
| `flowmachinenetwork_PrincipalObjectAttributeAccesses` | [flowmachinenetwork](flowmachinenetwork.md) | `objectid` | `objectid_flowmachinenetwork` |
| `flowsession_PrincipalObjectAttributeAccesses` | [flowsession](flowsession.md) | `objectid` | `objectid_flowsession` |
| `flowsessionbinary_PrincipalObjectAttributeAccesses` | [flowsessionbinary](flowsessionbinary.md) | `objectid` | `objectid_flowsessionbinary` |
| `fxexpression_PrincipalObjectAttributeAccesses` | [fxexpression](fxexpression.md) | `objectid` | `objectid_fxexpression` |
| `goal_principalobjectattributeaccess` | [goal](goal.md) | `objectid` | `objectid_goal` |
| `governanceconfiguration_PrincipalObjectAttributeAccesses` | [governanceconfiguration](governanceconfiguration.md) | `objectid` | `objectid_governanceconfiguration` |
| `indexattributes_PrincipalObjectAttributeAccesses` | [indexattributes](indexattributes.md) | `objectid` | `objectid_indexattributes` |
| `kbarticle_principalobjectattributeaccess` | [kbarticle](kbarticle.md) | `objectid` | `objectid_kbarticle` |
| `keyvaultreference_PrincipalObjectAttributeAccesses` | [keyvaultreference](keyvaultreference.md) | `objectid` | `objectid_keyvaultreference` |
| `knowledgearticle_PrincipalObjectAttributeAccess` | [knowledgearticle](knowledgearticle.md) | `objectid` | `objectid_knowledgearticle` |
| `knowledgearticleview_principalobjectattributeaccess` | [knowledgearticleviews](knowledgearticleviews.md) | `objectid` | `objectid_knowledgearticleviews` |
| `KnowledgeBaseRecord_PrincipalObjectAttributeAccess` | [knowledgebaserecord](knowledgebaserecord.md) | `objectid` | `objectid_knowledgebaserecord` |
| `knowledgefaq_PrincipalObjectAttributeAccesses` | [knowledgefaq](knowledgefaq.md) | `objectid` | `objectid_knowledgefaq` |
| `letter_principalobjectattributeaccess` | [letter](letter.md) | `objectid` | `objectid_letter` |
| `lk_principalobjectattributeaccess_organizationid` | [organization](organization.md) | `organizationid` | `organizationid` |
| `mailmergetemplate_principalobjectattributeaccess` | [mailmergetemplate](mailmergetemplate.md) | `objectid` | `objectid_mailmergetemplate` |
| `mainfewshot_PrincipalObjectAttributeAccesses` | [mainfewshot](mainfewshot.md) | `objectid` | `objectid_mainfewshot` |
| `makerfewshot_PrincipalObjectAttributeAccesses` | [makerfewshot](makerfewshot.md) | `objectid` | `objectid_makerfewshot` |
| `managedidentity_PrincipalObjectAttributeAccesses` | [managedidentity](managedidentity.md) | `objectid` | `objectid_managedidentity` |
| `maskingrule_PrincipalObjectAttributeAccesses` | [maskingrule](maskingrule.md) | `objectid` | `objectid_maskingrule` |
| `mcpserver_PrincipalObjectAttributeAccesses` | [mcpserver](mcpserver.md) | `objectid` | `objectid_mcpserver` |
| `mcptool_PrincipalObjectAttributeAccesses` | [mcptool](mcptool.md) | `objectid` | `objectid_mcptool` |
| `metadataforarchival_PrincipalObjectAttributeAccesses` | [metadataforarchival](metadataforarchival.md) | `objectid` | `objectid_metadataforarchival` |
| `mobileofflineprofileextension_PrincipalObjectAttributeAccesses` | [mobileofflineprofileextension](mobileofflineprofileextension.md) | `objectid` | `objectid_mobileofflineprofileextension` |
| `msdyn_aibdataset_PrincipalObjectAttributeAccesses` | [msdyn_aibdataset](msdyn_aibdataset.md) | `objectid` | `objectid_msdyn_aibdataset` |
| `msdyn_aibdatasetfile_PrincipalObjectAttributeAccesses` | [msdyn_aibdatasetfile](msdyn_aibdatasetfile.md) | `objectid` | `objectid_msdyn_aibdatasetfile` |
| `msdyn_aibdatasetrecord_PrincipalObjectAttributeAccesses` | [msdyn_aibdatasetrecord](msdyn_aibdatasetrecord.md) | `objectid` | `objectid_msdyn_aibdatasetrecord` |
| `msdyn_aibdatasetscontainer_PrincipalObjectAttributeAccesses` | [msdyn_aibdatasetscontainer](msdyn_aibdatasetscontainer.md) | `objectid` | `objectid_msdyn_aibdatasetscontainer` |
| `msdyn_aibfeedbackloop_PrincipalObjectAttributeAccesses` | [msdyn_aibfeedbackloop](msdyn_aibfeedbackloop.md) | `objectid` | `objectid_msdyn_aibfeedbackloop` |
| `msdyn_aibfile_PrincipalObjectAttributeAccesses` | [msdyn_aibfile](msdyn_aibfile.md) | `objectid` | `objectid_msdyn_aibfile` |
| `msdyn_aibfileattacheddata_PrincipalObjectAttributeAccesses` | [msdyn_aibfileattacheddata](msdyn_aibfileattacheddata.md) | `objectid` | `objectid_msdyn_aibfileattacheddata` |
| `msdyn_aiconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `objectid` | `objectid_msdyn_aiconfiguration` |
| `msdyn_aidataprocessingevent_PrincipalObjectAttributeAccesses` | [msdyn_aidataprocessingevent](msdyn_aidataprocessingevent.md) | `objectid` | `objectid_msdyn_aidataprocessingevent` |
| `msdyn_aidocumenttemplate_PrincipalObjectAttributeAccesses` | [msdyn_aidocumenttemplate](msdyn_aidocumenttemplate.md) | `objectid` | `objectid_msdyn_aidocumenttemplate` |
| `msdyn_aievaluationconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_aievaluationconfiguration](msdyn_aievaluationconfiguration.md) | `objectid` | `objectid_msdyn_aievaluationconfiguration` |
| `msdyn_aievaluationrun_PrincipalObjectAttributeAccesses` | [msdyn_aievaluationrun](msdyn_aievaluationrun.md) | `objectid` | `objectid_msdyn_aievaluationrun` |
| `msdyn_aievent_PrincipalObjectAttributeAccesses` | [msdyn_aievent](msdyn_aievent.md) | `objectid` | `objectid_msdyn_aievent` |
| `msdyn_aifptrainingdocument_PrincipalObjectAttributeAccesses` | [msdyn_aifptrainingdocument](msdyn_aifptrainingdocument.md) | `objectid` | `objectid_msdyn_aifptrainingdocument` |
| `msdyn_aimodel_PrincipalObjectAttributeAccesses` | [msdyn_aimodel](msdyn_aimodel.md) | `objectid` | `objectid_msdyn_aimodel` |
| `msdyn_aiodimage_PrincipalObjectAttributeAccesses` | [msdyn_aiodimage](msdyn_aiodimage.md) | `objectid` | `objectid_msdyn_aiodimage` |
| `msdyn_aiodlabel_PrincipalObjectAttributeAccesses` | [msdyn_aiodlabel](msdyn_aiodlabel.md) | `objectid` | `objectid_msdyn_aiodlabel` |
| `msdyn_aiodtrainingboundingbox_PrincipalObjectAttributeAccesses` | [msdyn_aiodtrainingboundingbox](msdyn_aiodtrainingboundingbox.md) | `objectid` | `objectid_msdyn_aiodtrainingboundingbox` |
| `msdyn_aiodtrainingimage_PrincipalObjectAttributeAccesses` | [msdyn_aiodtrainingimage](msdyn_aiodtrainingimage.md) | `objectid` | `objectid_msdyn_aiodtrainingimage` |
| `msdyn_aitemplate_PrincipalObjectAttributeAccesses` | [msdyn_aitemplate](msdyn_aitemplate.md) | `objectid` | `objectid_msdyn_aitemplate` |
| `msdyn_aitestcase_PrincipalObjectAttributeAccesses` | [msdyn_aitestcase](msdyn_aitestcase.md) | `objectid` | `objectid_msdyn_aitestcase` |
| `msdyn_aitestcasedocument_PrincipalObjectAttributeAccesses` | [msdyn_aitestcasedocument](msdyn_aitestcasedocument.md) | `objectid` | `objectid_msdyn_aitestcasedocument` |
| `msdyn_aitestcaseinput_PrincipalObjectAttributeAccesses` | [msdyn_aitestcaseinput](msdyn_aitestcaseinput.md) | `objectid` | `objectid_msdyn_aitestcaseinput` |
| `msdyn_aitestrun_PrincipalObjectAttributeAccesses` | [msdyn_aitestrun](msdyn_aitestrun.md) | `objectid` | `objectid_msdyn_aitestrun` |
| `msdyn_aitestrunbatch_PrincipalObjectAttributeAccesses` | [msdyn_aitestrunbatch](msdyn_aitestrunbatch.md) | `objectid` | `objectid_msdyn_aitestrunbatch` |
| `msdyn_analysiscomponent_PrincipalObjectAttributeAccesses` | [msdyn_analysiscomponent](msdyn_analysiscomponent.md) | `objectid` | `objectid_msdyn_analysiscomponent` |
| `msdyn_analysisjob_PrincipalObjectAttributeAccesses` | [msdyn_analysisjob](msdyn_analysisjob.md) | `objectid` | `objectid_msdyn_analysisjob` |
| `msdyn_analysisoverride_PrincipalObjectAttributeAccesses` | [msdyn_analysisoverride](msdyn_analysisoverride.md) | `objectid` | `objectid_msdyn_analysisoverride` |
| `msdyn_analysisresult_PrincipalObjectAttributeAccesses` | [msdyn_analysisresult](msdyn_analysisresult.md) | `objectid` | `objectid_msdyn_analysisresult` |
| `msdyn_analysisresultdetail_PrincipalObjectAttributeAccesses` | [msdyn_analysisresultdetail](msdyn_analysisresultdetail.md) | `objectid` | `objectid_msdyn_analysisresultdetail` |
| `msdyn_appinsightsmetadata_PrincipalObjectAttributeAccesses` | [msdyn_appinsightsmetadata](msdyn_appinsightsmetadata.md) | `objectid` | `objectid_msdyn_appinsightsmetadata` |
| `msdyn_copilotinteractions_PrincipalObjectAttributeAccesses` | [msdyn_copilotinteractions](msdyn_copilotinteractions.md) | `objectid` | `objectid_msdyn_copilotinteractions` |
| `msdyn_customcontrolextendedsettings_PrincipalObjectAttributeAccesses` | [msdyn_customcontrolextendedsettings](msdyn_customcontrolextendedsettings.md) | `objectid` | `objectid_msdyn_customcontrolextendedsettings` |
| `msdyn_dataflow_datalakefolder_PrincipalObjectAttributeAccesses` | [msdyn_dataflow_datalakefolder](msdyn_dataflow_datalakefolder.md) | `objectid` | `objectid_msdyn_dataflow_datalakefolder` |
| `msdyn_dataflow_PrincipalObjectAttributeAccesses` | [msdyn_dataflow](msdyn_dataflow.md) | `objectid` | `objectid_msdyn_dataflow` |
| `msdyn_dataflowconnectionreference_PrincipalObjectAttributeAccesses` | [msdyn_dataflowconnectionreference](msdyn_dataflowconnectionreference.md) | `objectid` | `objectid_msdyn_dataflowconnectionreference` |
| `msdyn_dataflowrefreshhistory_PrincipalObjectAttributeAccesses` | [msdyn_dataflowrefreshhistory](msdyn_dataflowrefreshhistory.md) | `objectid` | `objectid_msdyn_dataflowrefreshhistory` |
| `msdyn_dataflowtemplate_PrincipalObjectAttributeAccesses` | [msdyn_dataflowtemplate](msdyn_dataflowtemplate.md) | `objectid` | `objectid_msdyn_dataflowtemplate` |
| `msdyn_dmsrequest_PrincipalObjectAttributeAccesses` | [msdyn_dmsrequest](msdyn_dmsrequest.md) | `objectid` | `objectid_msdyn_dmsrequest` |
| `msdyn_dmsrequeststatus_PrincipalObjectAttributeAccesses` | [msdyn_dmsrequeststatus](msdyn_dmsrequeststatus.md) | `objectid` | `objectid_msdyn_dmsrequeststatus` |
| `msdyn_dmssyncrequest_PrincipalObjectAttributeAccesses` | [msdyn_dmssyncrequest](msdyn_dmssyncrequest.md) | `objectid` | `objectid_msdyn_dmssyncrequest` |
| `msdyn_dmssyncstatus_PrincipalObjectAttributeAccesses` | [msdyn_dmssyncstatus](msdyn_dmssyncstatus.md) | `objectid` | `objectid_msdyn_dmssyncstatus` |
| `msdyn_entitylinkchatconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_entitylinkchatconfiguration](msdyn_entitylinkchatconfiguration.md) | `objectid` | `objectid_msdyn_entitylinkchatconfiguration` |
| `msdyn_entityrefreshhistory_PrincipalObjectAttributeAccesses` | [msdyn_entityrefreshhistory](msdyn_entityrefreshhistory.md) | `objectid` | `objectid_msdyn_entityrefreshhistory` |
| `msdyn_favoriteknowledgearticle_PrincipalObjectAttributeAccesses` | [msdyn_favoriteknowledgearticle](msdyn_favoriteknowledgearticle.md) | `objectid` | `objectid_msdyn_favoriteknowledgearticle` |
| `msdyn_federatedarticle_PrincipalObjectAttributeAccesses` | [msdyn_federatedarticle](msdyn_federatedarticle.md) | `objectid` | `objectid_msdyn_federatedarticle` |
| `msdyn_federatedarticleincident_PrincipalObjectAttributeAccesses` | [msdyn_federatedarticleincident](msdyn_federatedarticleincident.md) | `objectid` | `objectid_msdyn_federatedarticleincident` |
| `msdyn_fileupload_PrincipalObjectAttributeAccesses` | [msdyn_fileupload](msdyn_fileupload.md) | `objectid` | `objectid_msdyn_fileupload` |
| `msdyn_flow_actionapprovalmodel_PrincipalObjectAttributeAccesses` | [msdyn_flow_actionapprovalmodel](msdyn_flow_actionapprovalmodel.md) | `objectid` | `objectid_msdyn_flow_actionapprovalmodel` |
| `msdyn_flow_approval_PrincipalObjectAttributeAccesses` | [msdyn_flow_approval](msdyn_flow_approval.md) | `objectid` | `objectid_msdyn_flow_approval` |
| `msdyn_flow_approvalrequest_PrincipalObjectAttributeAccesses` | [msdyn_flow_approvalrequest](msdyn_flow_approvalrequest.md) | `objectid` | `objectid_msdyn_flow_approvalrequest` |
| `msdyn_flow_approvalresponse_PrincipalObjectAttributeAccesses` | [msdyn_flow_approvalresponse](msdyn_flow_approvalresponse.md) | `objectid` | `objectid_msdyn_flow_approvalresponse` |
| `msdyn_flow_approvalstep_PrincipalObjectAttributeAccesses` | [msdyn_flow_approvalstep](msdyn_flow_approvalstep.md) | `objectid` | `objectid_msdyn_flow_approvalstep` |
| `msdyn_flow_awaitallactionapprovalmodel_PrincipalObjectAttributeAccesses` | [msdyn_flow_awaitallactionapprovalmodel](msdyn_flow_awaitallactionapprovalmodel.md) | `objectid` | `objectid_msdyn_flow_awaitallactionapprovalmodel` |
| `msdyn_flow_awaitallapprovalmodel_PrincipalObjectAttributeAccesses` | [msdyn_flow_awaitallapprovalmodel](msdyn_flow_awaitallapprovalmodel.md) | `objectid` | `objectid_msdyn_flow_awaitallapprovalmodel` |
| `msdyn_flow_basicapprovalmodel_PrincipalObjectAttributeAccesses` | [msdyn_flow_basicapprovalmodel](msdyn_flow_basicapprovalmodel.md) | `objectid` | `objectid_msdyn_flow_basicapprovalmodel` |
| `msdyn_flow_flowapproval_PrincipalObjectAttributeAccesses` | [msdyn_flow_flowapproval](msdyn_flow_flowapproval.md) | `objectid` | `objectid_msdyn_flow_flowapproval` |
| `msdyn_formmapping_PrincipalObjectAttributeAccesses` | [msdyn_formmapping](msdyn_formmapping.md) | `objectid` | `objectid_msdyn_formmapping` |
| `msdyn_function_PrincipalObjectAttributeAccesses` | [msdyn_function](msdyn_function.md) | `objectid` | `objectid_msdyn_function` |
| `msdyn_helppage_PrincipalObjectAttributeAccesses` | [msdyn_helppage](msdyn_helppage.md) | `objectid` | `objectid_msdyn_helppage` |
| `msdyn_historicalcaseharvestbatch_PrincipalObjectAttributeAccesses` | [msdyn_historicalcaseharvestbatch](msdyn_historicalcaseharvestbatch.md) | `objectid` | `objectid_msdyn_historicalcaseharvestbatch` |
| `msdyn_historicalcaseharvestrun_PrincipalObjectAttributeAccesses` | [msdyn_historicalcaseharvestrun](msdyn_historicalcaseharvestrun.md) | `objectid` | `objectid_msdyn_historicalcaseharvestrun` |
| `msdyn_insightsstorevirtualentity_PrincipalObjectAttributeAccesses` | [msdyn_insightsstorevirtualentity](msdyn_insightsstorevirtualentity.md) | `objectid` | `objectid_msdyn_insightsstorevirtualentity` |
| `msdyn_integratedsearchprovider_PrincipalObjectAttributeAccesses` | [msdyn_integratedsearchprovider](msdyn_integratedsearchprovider.md) | `objectid` | `objectid_msdyn_integratedsearchprovider` |
| `msdyn_kalanguagesetting_PrincipalObjectAttributeAccesses` | [msdyn_kalanguagesetting](msdyn_kalanguagesetting.md) | `objectid` | `objectid_msdyn_kalanguagesetting` |
| `msdyn_kbattachment_PrincipalObjectAttributeAccesses` | [msdyn_kbattachment](msdyn_kbattachment.md) | `objectid` | `objectid_msdyn_kbattachment` |
| `msdyn_kmfederatedsearchconfig_PrincipalObjectAttributeAccesses` | [msdyn_kmfederatedsearchconfig](msdyn_kmfederatedsearchconfig.md) | `objectid` | `objectid_msdyn_kmfederatedsearchconfig` |
| `msdyn_kmpersonalizationsetting_PrincipalObjectAttributeAccesses` | [msdyn_kmpersonalizationsetting](msdyn_kmpersonalizationsetting.md) | `objectid` | `objectid_msdyn_kmpersonalizationsetting` |
| `msdyn_knowledgearticleimage_PrincipalObjectAttributeAccesses` | [msdyn_knowledgearticleimage](msdyn_knowledgearticleimage.md) | `objectid` | `objectid_msdyn_knowledgearticleimage` |
| `msdyn_knowledgearticletemplate_PrincipalObjectAttributeAccesses` | [msdyn_knowledgearticletemplate](msdyn_knowledgearticletemplate.md) | `objectid` | `objectid_msdyn_knowledgearticletemplate` |
| `msdyn_knowledgeassetconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_knowledgeassetconfiguration](msdyn_knowledgeassetconfiguration.md) | `objectid` | `objectid_msdyn_knowledgeassetconfiguration` |
| `msdyn_knowledgeconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_knowledgeconfiguration](msdyn_knowledgeconfiguration.md) | `objectid` | `objectid_msdyn_knowledgeconfiguration` |
| `msdyn_knowledgeharvestjobrecord_PrincipalObjectAttributeAccesses` | [msdyn_knowledgeharvestjobrecord](msdyn_knowledgeharvestjobrecord.md) | `objectid` | `objectid_msdyn_knowledgeharvestjobrecord` |
| `msdyn_knowledgeinteractioninsight_PrincipalObjectAttributeAccesses` | [msdyn_knowledgeinteractioninsight](msdyn_knowledgeinteractioninsight.md) | `objectid` | `objectid_msdyn_knowledgeinteractioninsight` |
| `msdyn_knowledgemanagementsetting_PrincipalObjectAttributeAccesses` | [msdyn_knowledgemanagementsetting](msdyn_knowledgemanagementsetting.md) | `objectid` | `objectid_msdyn_knowledgemanagementsetting` |
| `msdyn_knowledgepersonalfilter_PrincipalObjectAttributeAccesses` | [msdyn_knowledgepersonalfilter](msdyn_knowledgepersonalfilter.md) | `objectid` | `objectid_msdyn_knowledgepersonalfilter` |
| `msdyn_knowledgesearchfilter_PrincipalObjectAttributeAccesses` | [msdyn_knowledgesearchfilter](msdyn_knowledgesearchfilter.md) | `objectid` | `objectid_msdyn_knowledgesearchfilter` |
| `msdyn_knowledgesearchinsight_PrincipalObjectAttributeAccesses` | [msdyn_knowledgesearchinsight](msdyn_knowledgesearchinsight.md) | `objectid` | `objectid_msdyn_knowledgesearchinsight` |
| `msdyn_mobileapp_PrincipalObjectAttributeAccesses` | [msdyn_mobileapp](msdyn_mobileapp.md) | `objectid` | `objectid_msdyn_mobileapp` |
| `msdyn_modulerundetail_PrincipalObjectAttributeAccesses` | [msdyn_modulerundetail](msdyn_modulerundetail.md) | `objectid` | `objectid_msdyn_modulerundetail` |
| `msdyn_pmanalysishistory_PrincipalObjectAttributeAccesses` | [msdyn_pmanalysishistory](msdyn_pmanalysishistory.md) | `objectid` | `objectid_msdyn_pmanalysishistory` |
| `msdyn_pmbusinessruleautomationconfig_PrincipalObjectAttributeAccesses` | [msdyn_pmbusinessruleautomationconfig](msdyn_pmbusinessruleautomationconfig.md) | `objectid` | `objectid_msdyn_pmbusinessruleautomationconfig` |
| `msdyn_pmcalendar_PrincipalObjectAttributeAccesses` | [msdyn_pmcalendar](msdyn_pmcalendar.md) | `objectid` | `objectid_msdyn_pmcalendar` |
| `msdyn_pmcalendarversion_PrincipalObjectAttributeAccesses` | [msdyn_pmcalendarversion](msdyn_pmcalendarversion.md) | `objectid` | `objectid_msdyn_pmcalendarversion` |
| `msdyn_pminferredtask_PrincipalObjectAttributeAccesses` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `objectid` | `objectid_msdyn_pminferredtask` |
| `msdyn_pmprocessextendedmetadataversion_PrincipalObjectAttributeAccesses` | [msdyn_pmprocessextendedmetadataversion](msdyn_pmprocessextendedmetadataversion.md) | `objectid` | `objectid_msdyn_pmprocessextendedmetadataversion` |
| `msdyn_pmprocesstemplate_PrincipalObjectAttributeAccesses` | [msdyn_pmprocesstemplate](msdyn_pmprocesstemplate.md) | `objectid` | `objectid_msdyn_pmprocesstemplate` |
| `msdyn_pmprocessusersettings_PrincipalObjectAttributeAccesses` | [msdyn_pmprocessusersettings](msdyn_pmprocessusersettings.md) | `objectid` | `objectid_msdyn_pmprocessusersettings` |
| `msdyn_pmprocessversion_PrincipalObjectAttributeAccesses` | [msdyn_pmprocessversion](msdyn_pmprocessversion.md) | `objectid` | `objectid_msdyn_pmprocessversion` |
| `msdyn_pmrecording_PrincipalObjectAttributeAccesses` | [msdyn_pmrecording](msdyn_pmrecording.md) | `objectid` | `objectid_msdyn_pmrecording` |
| `msdyn_pmsimulation_PrincipalObjectAttributeAccesses` | [msdyn_pmsimulation](msdyn_pmsimulation.md) | `objectid` | `objectid_msdyn_pmsimulation` |
| `msdyn_pmtab_PrincipalObjectAttributeAccesses` | [msdyn_pmtab](msdyn_pmtab.md) | `objectid` | `objectid_msdyn_pmtab` |
| `msdyn_pmtemplate_PrincipalObjectAttributeAccesses` | [msdyn_pmtemplate](msdyn_pmtemplate.md) | `objectid` | `objectid_msdyn_pmtemplate` |
| `msdyn_pmview_PrincipalObjectAttributeAccesses` | [msdyn_pmview](msdyn_pmview.md) | `objectid` | `objectid_msdyn_pmview` |
| `msdyn_qna_PrincipalObjectAttributeAccesses` | [msdyn_qna](msdyn_qna.md) | `objectid` | `objectid_msdyn_qna` |
| `msdyn_richtextfile_PrincipalObjectAttributeAccesses` | [msdyn_richtextfile](msdyn_richtextfile.md) | `objectid` | `objectid_msdyn_richtextfile` |
| `msdyn_salesforcestructuredobject_PrincipalObjectAttributeAccesses` | [msdyn_salesforcestructuredobject](msdyn_salesforcestructuredobject.md) | `objectid` | `objectid_msdyn_salesforcestructuredobject` |
| `msdyn_salesforcestructuredqnaconfig_PrincipalObjectAttributeAccesses` | [msdyn_salesforcestructuredqnaconfig](msdyn_salesforcestructuredqnaconfig.md) | `objectid` | `objectid_msdyn_salesforcestructuredqnaconfig` |
| `msdyn_schedule_PrincipalObjectAttributeAccesses` | [msdyn_schedule](msdyn_schedule.md) | `objectid` | `objectid_msdyn_schedule` |
| `msdyn_serviceconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_serviceconfiguration](msdyn_serviceconfiguration.md) | `objectid` | `objectid_msdyn_serviceconfiguration` |
| `msdyn_slakpi_PrincipalObjectAttributeAccesses` | [msdyn_slakpi](msdyn_slakpi.md) | `objectid` | `objectid_msdyn_slakpi` |
| `msdyn_solutionhealthrule_PrincipalObjectAttributeAccesses` | [msdyn_solutionhealthrule](msdyn_solutionhealthrule.md) | `objectid` | `objectid_msdyn_solutionhealthrule` |
| `msdyn_solutionhealthruleargument_PrincipalObjectAttributeAccesses` | [msdyn_solutionhealthruleargument](msdyn_solutionhealthruleargument.md) | `objectid` | `objectid_msdyn_solutionhealthruleargument` |
| `msdyn_solutionhealthruleset_PrincipalObjectAttributeAccesses` | [msdyn_solutionhealthruleset](msdyn_solutionhealthruleset.md) | `objectid` | `objectid_msdyn_solutionhealthruleset` |
| `msdyn_tour_PrincipalObjectAttributeAccesses` | [msdyn_tour](msdyn_tour.md) | `objectid` | `objectid_msdyn_tour` |
| `msdyn_virtualtablecolumncandidate_PrincipalObjectAttributeAccesses` | [msdyn_virtualtablecolumncandidate](msdyn_virtualtablecolumncandidate.md) | `objectid` | `objectid_msdyn_virtualtablecolumncandidate` |
| `msdyn_workflowactionstatus_PrincipalObjectAttributeAccesses` | [msdyn_workflowactionstatus](msdyn_workflowactionstatus.md) | `objectid` | `objectid_msdyn_workflowactionstatus` |
| `msdynce_botcontent_PrincipalObjectAttributeAccesses` | [msdynce_botcontent](msdynce_botcontent.md) | `objectid` | `objectid_msdynce_botcontent` |
| `msgraphresourcetosubscription_PrincipalObjectAttributeAccesses` | [msgraphresourcetosubscription](msgraphresourcetosubscription.md) | `objectid` | `objectid_msgraphresourcetosubscription` |
| `mspcat_catalogsubmissionfiles_PrincipalObjectAttributeAccesses` | [mspcat_catalogsubmissionfiles](mspcat_catalogsubmissionfiles.md) | `objectid` | `objectid_mspcat_catalogsubmissionfiles` |
| `mspcat_packagestore_PrincipalObjectAttributeAccesses` | [mspcat_packagestore](mspcat_packagestore.md) | `objectid` | `objectid_mspcat_packagestore` |
| `organizationdatasyncfnostate_PrincipalObjectAttributeAccesses` | [organizationdatasyncfnostate](organizationdatasyncfnostate.md) | `objectid` | `objectid_organizationdatasyncfnostate` |
| `organizationdatasyncstate_PrincipalObjectAttributeAccesses` | [organizationdatasyncstate](organizationdatasyncstate.md) | `objectid` | `objectid_organizationdatasyncstate` |
| `organizationdatasyncsubscription_PrincipalObjectAttributeAccesses` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `objectid` | `objectid_organizationdatasyncsubscription` |
| `organizationdatasyncsubscriptionentity_PrincipalObjectAttributeAccesses` | [organizationdatasyncsubscriptionentity](organizationdatasyncsubscriptionentity.md) | `objectid` | `objectid_organizationdatasyncsubscriptionentity` |
| `organizationdatasyncsubscriptionfnotable_PrincipalObjectAttributeAccesses` | [organizationdatasyncsubscriptionfnotable](organizationdatasyncsubscriptionfnotable.md) | `objectid` | `objectid_organizationdatasyncsubscriptionfnotable` |
| `package_PrincipalObjectAttributeAccesses` | [package](package.md) | `objectid` | `objectid_package` |
| `packagehistory_PrincipalObjectAttributeAccesses` | [packagehistory](packagehistory.md) | `objectid` | `objectid_packagehistory` |
| `phonecall_principalobjectattributeaccess` | [phonecall](phonecall.md) | `objectid` | `objectid_phonecall` |
| `plannerbusinessscenario_PrincipalObjectAttributeAccesses` | [plannerbusinessscenario](plannerbusinessscenario.md) | `objectid` | `objectid_plannerbusinessscenario` |
| `plannersyncaction_PrincipalObjectAttributeAccesses` | [plannersyncaction](plannersyncaction.md) | `objectid` | `objectid_plannersyncaction` |
| `plugin_PrincipalObjectAttributeAccesses` | [plugin](plugin.md) | `objectid` | `objectid_plugin` |
| `pluginpackage_PrincipalObjectAttributeAccesses` | [pluginpackage](pluginpackage.md) | `objectid` | `objectid_pluginpackage` |
| `position_principalobjectattributeaccess` | [position](position.md) | `objectid` | `objectid_position` |
| `powerbidataset_PrincipalObjectAttributeAccesses` | [powerbidataset](powerbidataset.md) | `objectid` | `objectid_powerbidataset` |
| `powerbidatasetapdx_PrincipalObjectAttributeAccesses` | [powerbidatasetapdx](powerbidatasetapdx.md) | `objectid` | `objectid_powerbidatasetapdx` |
| `powerbimashupparameter_PrincipalObjectAttributeAccesses` | [powerbimashupparameter](powerbimashupparameter.md) | `objectid` | `objectid_powerbimashupparameter` |
| `powerbireport_PrincipalObjectAttributeAccesses` | [powerbireport](powerbireport.md) | `objectid` | `objectid_powerbireport` |
| `powerbireportapdx_PrincipalObjectAttributeAccesses` | [powerbireportapdx](powerbireportapdx.md) | `objectid` | `objectid_powerbireportapdx` |
| `powerfxrule_PrincipalObjectAttributeAccesses` | [powerfxrule](powerfxrule.md) | `objectid` | `objectid_powerfxrule` |
| `powerpagecomponent_PrincipalObjectAttributeAccesses` | [powerpagecomponent](powerpagecomponent.md) | `objectid` | `objectid_powerpagecomponent` |
| `powerpagesddosalert_PrincipalObjectAttributeAccesses` | [powerpagesddosalert](powerpagesddosalert.md) | `objectid` | `objectid_powerpagesddosalert` |
| `powerpagesite_PrincipalObjectAttributeAccesses` | [powerpagesite](powerpagesite.md) | `objectid` | `objectid_powerpagesite` |
| `powerpagesitelanguage_PrincipalObjectAttributeAccesses` | [powerpagesitelanguage](powerpagesitelanguage.md) | `objectid` | `objectid_powerpagesitelanguage` |
| `powerpagesitepublished_PrincipalObjectAttributeAccesses` | [powerpagesitepublished](powerpagesitepublished.md) | `objectid` | `objectid_powerpagesitepublished` |
| `powerpagesmanagedidentity_PrincipalObjectAttributeAccesses` | [powerpagesmanagedidentity](powerpagesmanagedidentity.md) | `objectid` | `objectid_powerpagesmanagedidentity` |
| `powerpagesscanreport_PrincipalObjectAttributeAccesses` | [powerpagesscanreport](powerpagesscanreport.md) | `objectid` | `objectid_powerpagesscanreport` |
| `powerpagessourcefile_PrincipalObjectAttributeAccesses` | [powerpagessourcefile](powerpagessourcefile.md) | `objectid` | `objectid_powerpagessourcefile` |
| `privilegecheckerlog_PrincipalObjectAttributeAccesses` | [privilegecheckerlog](privilegecheckerlog.md) | `objectid` | `objectid_privilegecheckerlog` |
| `privilegecheckerrun_PrincipalObjectAttributeAccesses` | [privilegecheckerrun](privilegecheckerrun.md) | `objectid` | `objectid_privilegecheckerrun` |
| `privilegesremovalsetting_PrincipalObjectAttributeAccesses` | [privilegesremovalsetting](privilegesremovalsetting.md) | `objectid` | `objectid_privilegesremovalsetting` |
| `processstageparameter_PrincipalObjectAttributeAccesses` | [processstageparameter](processstageparameter.md) | `objectid` | `objectid_processstageparameter` |
| `provisionlanguageforuser_PrincipalObjectAttributeAccesses` | [provisionlanguageforuser](provisionlanguageforuser.md) | `objectid` | `objectid_provisionlanguageforuser` |
| `purviewlabelinfo_PrincipalObjectAttributeAccesses` | [purviewlabelinfo](purviewlabelinfo.md) | `objectid` | `objectid_purviewlabelinfo` |
| `queue_principalobjectattributeaccess` | [queue](queue.md) | `objectid` | `objectid_queue` |
| `queueitem_principalobjectattributeaccess` | [queueitem](queueitem.md) | `objectid` | `objectid_queueitem` |
| `recordfilter_PrincipalObjectAttributeAccesses` | [recordfilter](recordfilter.md) | `objectid` | `objectid_recordfilter` |
| `recurringappointmentmaster_principalobjectattributeaccess` | [recurringappointmentmaster](recurringappointmentmaster.md) | `objectid` | `objectid_recurringappointmentmaster` |
| `recyclebinconfig_PrincipalObjectAttributeAccesses` | [recyclebinconfig](recyclebinconfig.md) | `objectid` | `objectid_recyclebinconfig` |
| `relationshipattribute_PrincipalObjectAttributeAccesses` | [relationshipattribute](relationshipattribute.md) | `objectid` | `objectid_relationshipattribute` |
| `reportcategory_principalobjectattributeaccess` | [reportcategory](reportcategory.md) | `objectid` | `objectid_reportcategory` |
| `reportparameter_PrincipalObjectAttributeAccesses` | [reportparameter](reportparameter.md) | `objectid` | `objectid_reportparameter` |
| `retaineddataexcel_PrincipalObjectAttributeAccesses` | [retaineddataexcel](retaineddataexcel.md) | `objectid` | `objectid_retaineddataexcel` |
| `retentionconfig_PrincipalObjectAttributeAccesses` | [retentionconfig](retentionconfig.md) | `objectid` | `objectid_retentionconfig` |
| `retentionfailuredetail_PrincipalObjectAttributeAccesses` | [retentionfailuredetail](retentionfailuredetail.md) | `objectid` | `objectid_retentionfailuredetail` |
| `retentionoperation_PrincipalObjectAttributeAccesses` | [retentionoperation](retentionoperation.md) | `objectid` | `objectid_retentionoperation` |
| `retentionoperationdetail_PrincipalObjectAttributeAccesses` | [retentionoperationdetail](retentionoperationdetail.md) | `objectid` | `objectid_retentionoperationdetail` |
| `retentionsuccessdetail_PrincipalObjectAttributeAccesses` | [retentionsuccessdetail](retentionsuccessdetail.md) | `objectid` | `objectid_retentionsuccessdetail` |
| `roleeditorlayout_PrincipalObjectAttributeAccesses` | [roleeditorlayout](roleeditorlayout.md) | `objectid` | `objectid_roleeditorlayout` |
| `sa_suggestedaction_PrincipalObjectAttributeAccesses` | [sa_suggestedaction](sa_suggestedaction.md) | `objectid` | `objectid_sa_suggestedaction` |
| `sa_suggestedactioncriteria_PrincipalObjectAttributeAccesses` | [sa_suggestedactioncriteria](sa_suggestedactioncriteria.md) | `objectid` | `objectid_sa_suggestedactioncriteria` |
| `savingrule_PrincipalObjectAttributeAccesses` | [savingrule](savingrule.md) | `objectid` | `objectid_savingrule` |
| `searchattributesettings_PrincipalObjectAttributeAccesses` | [searchattributesettings](searchattributesettings.md) | `objectid` | `objectid_searchattributesettings` |
| `searchcustomanalyzer_PrincipalObjectAttributeAccesses` | [searchcustomanalyzer](searchcustomanalyzer.md) | `objectid` | `objectid_searchcustomanalyzer` |
| `searchrelationshipsettings_PrincipalObjectAttributeAccesses` | [searchrelationshipsettings](searchrelationshipsettings.md) | `objectid` | `objectid_searchrelationshipsettings` |
| `sensitivitylabelattributemapping_PrincipalObjectAttributeAccesses` | [sensitivitylabelattributemapping](sensitivitylabelattributemapping.md) | `objectid` | `objectid_sensitivitylabelattributemapping` |
| `serviceplan_PrincipalObjectAttributeAccesses` | [serviceplan](serviceplan.md) | `objectid` | `objectid_serviceplan` |
| `serviceplanmapping_PrincipalObjectAttributeAccesses` | [serviceplanmapping](serviceplanmapping.md) | `objectid` | `objectid_serviceplanmapping` |
| `sharedlinksetting_PrincipalObjectAttributeAccesses` | [sharedlinksetting](sharedlinksetting.md) | `objectid` | `objectid_sharedlinksetting` |
| `sharedobject_PrincipalObjectAttributeAccesses` | [sharedobject](sharedobject.md) | `objectid` | `objectid_sharedobject` |
| `sharedworkspace_PrincipalObjectAttributeAccesses` | [sharedworkspace](sharedworkspace.md) | `objectid` | `objectid_sharedworkspace` |
| `sharedworkspacepool_PrincipalObjectAttributeAccesses` | [sharedworkspacepool](sharedworkspacepool.md) | `objectid` | `objectid_sharedworkspacepool` |
| `sharepointdocumentlocation_principalobjectattributeaccess` | [sharepointdocumentlocation](sharepointdocumentlocation.md) | `objectid` | `objectid_sharepointdocumentlocation` |
| `sharepointmanagedidentity_PrincipalObjectAttributeAccesses` | [sharepointmanagedidentity](sharepointmanagedidentity.md) | `objectid` | `objectid_sharepointmanagedidentity` |
| `sharepointsite_principalobjectattributeaccess` | [sharepointsite](sharepointsite.md) | `objectid` | `objectid_sharepointsite` |
| `sideloadedaiplugin_PrincipalObjectAttributeAccesses` | [sideloadedaiplugin](sideloadedaiplugin.md) | `objectid` | `objectid_sideloadedaiplugin` |
| `socialactivity_principalobjectattributeaccess` | [socialactivity](socialactivity.md) | `objectid` | `objectid_socialactivity` |
| `socialprofile_principalobjectattributeaccess` | [socialprofile](socialprofile.md) | `objectid` | `objectid_socialprofile` |
| `solutioncomponentattributeconfiguration_PrincipalObjectAttributeAccesses` | [solutioncomponentattributeconfiguration](solutioncomponentattributeconfiguration.md) | `objectid` | `objectid_solutioncomponentattributeconfiguration` |
| `solutioncomponentbatchconfiguration_PrincipalObjectAttributeAccesses` | [solutioncomponentbatchconfiguration](solutioncomponentbatchconfiguration.md) | `objectid` | `objectid_solutioncomponentbatchconfiguration` |
| `solutioncomponentconfiguration_PrincipalObjectAttributeAccesses` | [solutioncomponentconfiguration](solutioncomponentconfiguration.md) | `objectid` | `objectid_solutioncomponentconfiguration` |
| `solutioncomponentrelationshipconfiguration_PrincipalObjectAttributeAccesses` | [solutioncomponentrelationshipconfiguration](solutioncomponentrelationshipconfiguration.md) | `objectid` | `objectid_solutioncomponentrelationshipconfiguration` |
| `stagedentity_PrincipalObjectAttributeAccesses` | [stagedentity](stagedentity.md) | `objectid` | `objectid_stagedentity` |
| `stagedentityattribute_PrincipalObjectAttributeAccesses` | [stagedentityattribute](stagedentityattribute.md) | `objectid` | `objectid_stagedentityattribute` |
| `stagedmetadataasyncoperation_PrincipalObjectAttributeAccesses` | [stagedmetadataasyncoperation](stagedmetadataasyncoperation.md) | `objectid` | `objectid_stagedmetadataasyncoperation` |
| `stagesolutionupload_PrincipalObjectAttributeAccesses` | [stagesolutionupload](stagesolutionupload.md) | `objectid` | `objectid_stagesolutionupload` |
| `supportusertable_PrincipalObjectAttributeAccesses` | [supportusertable](supportusertable.md) | `objectid` | `objectid_supportusertable` |
| `synapsedatabase_PrincipalObjectAttributeAccesses` | [synapsedatabase](synapsedatabase.md) | `objectid` | `objectid_synapsedatabase` |
| `synapselinkexternaltablestate_PrincipalObjectAttributeAccesses` | [synapselinkexternaltablestate](synapselinkexternaltablestate.md) | `objectid` | `objectid_synapselinkexternaltablestate` |
| `synapselinkprofile_PrincipalObjectAttributeAccesses` | [synapselinkprofile](synapselinkprofile.md) | `objectid` | `objectid_synapselinkprofile` |
| `synapselinkprofileentity_PrincipalObjectAttributeAccesses` | [synapselinkprofileentity](synapselinkprofileentity.md) | `objectid` | `objectid_synapselinkprofileentity` |
| `synapselinkprofileentitystate_PrincipalObjectAttributeAccesses` | [synapselinkprofileentitystate](synapselinkprofileentitystate.md) | `objectid` | `objectid_synapselinkprofileentitystate` |
| `synapselinkschedule_PrincipalObjectAttributeAccesses` | [synapselinkschedule](synapselinkschedule.md) | `objectid` | `objectid_synapselinkschedule` |
| `systemuser_principalobjectattributeaccess` | [systemuser](systemuser.md) | `objectid` | `objectid_systemuser` |
| `systemuser_principalobjectattributeaccess_principalid` | [systemuser](systemuser.md) | `principalid` | `principalid_systemuser` |
| `systemuserauthorizationchangetracker_PrincipalObjectAttributeAccesses` | [systemuserauthorizationchangetracker](systemuserauthorizationchangetracker.md) | `objectid` | `objectid_systemuserauthorizationchangetracker` |
| `tag_PrincipalObjectAttributeAccesses` | [tag](tag.md) | `objectid` | `objectid_tag` |
| `taggedflowsession_PrincipalObjectAttributeAccesses` | [taggedflowsession](taggedflowsession.md) | `objectid` | `objectid_taggedflowsession` |
| `taggedprocess_PrincipalObjectAttributeAccesses` | [taggedprocess](taggedprocess.md) | `objectid` | `objectid_taggedprocess` |
| `task_principalobjectattributeaccess` | [task](task.md) | `objectid` | `objectid_task` |
| `team_principalobjectattributeaccess` | [team](team.md) | `objectid` | `objectid_team` |
| `team_principalobjectattributeaccess_principalid` | [team](team.md) | `principalid` | `principalid_team` |
| `teammobileofflineprofilemembership_PrincipalObjectAttributeAccesses` | [teammobileofflineprofilemembership](teammobileofflineprofilemembership.md) | `objectid` | `objectid_teammobileofflineprofilemembership` |
| `territory_principalobjectattributeaccess` | [territory](territory.md) | `objectid` | `objectid_territory` |
| `unstructuredfilesearchentity_PrincipalObjectAttributeAccesses` | [unstructuredfilesearchentity](unstructuredfilesearchentity.md) | `objectid` | `objectid_unstructuredfilesearchentity` |
| `unstructuredfilesearchrecord_PrincipalObjectAttributeAccesses` | [unstructuredfilesearchrecord](unstructuredfilesearchrecord.md) | `objectid` | `objectid_unstructuredfilesearchrecord` |
| `usermobileofflineprofilemembership_PrincipalObjectAttributeAccesses` | [usermobileofflineprofilemembership](usermobileofflineprofilemembership.md) | `objectid` | `objectid_usermobileofflineprofilemembership` |
| `userrating_PrincipalObjectAttributeAccesses` | [userrating](userrating.md) | `objectid` | `objectid_userrating` |
| `viewasexamplequestion_PrincipalObjectAttributeAccesses` | [viewasexamplequestion](viewasexamplequestion.md) | `objectid` | `objectid_viewasexamplequestion` |
| `virtualentitymetadata_PrincipalObjectAttributeAccesses` | [virtualentitymetadata](virtualentitymetadata.md) | `objectid` | `objectid_virtualentitymetadata` |
| `workflowbinary_PrincipalObjectAttributeAccesses` | [workflowbinary](workflowbinary.md) | `objectid` | `objectid_workflowbinary` |
| `workflowmetadata_PrincipalObjectAttributeAccesses` | [workflowmetadata](workflowmetadata.md) | `objectid` | `objectid_workflowmetadata` |
| `workqueue_PrincipalObjectAttributeAccesses` | [workqueue](workqueue.md) | `objectid` | `objectid_workqueue` |
| `workqueueitem_PrincipalObjectAttributeAccesses` | [workqueueitem](workqueueitem.md) | `objectid` | `objectid_workqueueitem` |



## Source

Generated from [principalobjectattributeaccess.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/principalobjectattributeaccess.md) on 2026-05-06.