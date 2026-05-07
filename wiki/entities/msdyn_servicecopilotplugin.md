---
logical: "msdyn_servicecopilotplugin"
display: "Service Copilot Plugin"
entitySetName: "msdyn_servicecopilotplugins"
primaryId: "msdyn_servicecopilotpluginid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Service Copilot Plugin

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_servicecopilotplugin` |
| Display name | Service Copilot Plugin |
| Display (plural) | Service Copilot Plugins |
| Schema name | `msdyn_servicecopilotplugin` |
| Entity set (Web API) | `msdyn_servicecopilotplugins` |
| Primary id attribute | `msdyn_servicecopilotpluginid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_servicecopilotplugins?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_servicecopilotplugins(<guid>)
POST /api/data/v9.2/msdyn_servicecopilotplugins
PATCH /api/data/v9.2/msdyn_servicecopilotplugins(<guid>)
DELETE /api/data/v9.2/msdyn_servicecopilotplugins(<guid>)
```

## Attributes

Writable: **26** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `LastPublishSuccessOn`, `msdyn_aipluginid`, `msdyn_analyticsenabled`, `msdyn_authmode`, `msdyn_botcomponentid`, `msdyn_connectionidpendingpublish`, `msdyn_customconnectorcontext`, `msdyn_ispublishpending`, `msdyn_lastbappluginsynctime`, `msdyn_name`, `msdyn_needsrolecheck`, `msdyn_parameterconfiguration`, `msdyn_plugindescription`, `msdyn_pluginname`, `msdyn_plugintype`, `msdyn_pluginuniquename`, `msdyn_servicecopilotpluginId`, `msdyn_skipgptresponse`, `msdyn_status`, `OverriddenCreatedOn`, `PublishInitiatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_servicecopilotplugin_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_servicecopilotplugin_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_servicecopilotplugin_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_servicecopilotplugin_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_aiplugin_msdyn_servicecopilotplugin_aipluginid` | [aiplugin](aiplugin.md) | `msdyn_aipluginid` | `msdyn_aipluginid` |
| `msdyn_botcomponent_msdyn_servicecopilotplugin_botcomponentid` | [botcomponent](botcomponent.md) | `msdyn_botcomponentid` | `msdyn_botcomponentid` |
| `organization_msdyn_servicecopilotplugin` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_servicecopilotplugin_msdyn_servicecopilotpluginaction_servicecopilotpluginid` | _n/a_ | `msdyn_servicecopilotpluginid` | _n/a_ |
| `msdyn_msdyn_servicecopilotplugin_msdyn_servicecopilotpluginrole_servicecopilotpluginId` | _n/a_ | `msdyn_servicecopilotpluginid` | _n/a_ |
| `msdyn_servicecopilotplugin_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_servicecopilotplugin_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_servicecopilotplugin_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_servicecopilotplugin_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_servicecopilotplugin_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_servicecopilotplugin_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_servicecopilotplugin_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_servicecopilotplugin_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_servicecopilotplugin.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_servicecopilotplugin.md) on 2026-05-06.