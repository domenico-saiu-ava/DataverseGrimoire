---
logical: "msdyn_servicecopilotpluginaction"
display: "Service Copilot Plugin Action"
entitySetName: "msdyn_servicecopilotpluginactions"
primaryId: "msdyn_servicecopilotpluginactionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Service Copilot Plugin Action

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_servicecopilotpluginaction` |
| Display name | Service Copilot Plugin Action |
| Display (plural) | Service Copilot Plugin Actions |
| Schema name | `msdyn_servicecopilotpluginaction` |
| Entity set (Web API) | `msdyn_servicecopilotpluginactions` |
| Primary id attribute | `msdyn_servicecopilotpluginactionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_servicecopilotpluginactions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_servicecopilotpluginactions(<guid>)
POST /api/data/v9.2/msdyn_servicecopilotpluginactions
PATCH /api/data/v9.2/msdyn_servicecopilotpluginactions(<guid>)
DELETE /api/data/v9.2/msdyn_servicecopilotpluginactions(<guid>)
```

## Attributes

Writable: **17** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_actionuniquename`, `msdyn_aipluginoperationid`, `msdyn_botcomponentid`, `msdyn_connectorname`, `msdyn_lastactionsynctime`, `msdyn_name`, `msdyn_parameterconfiguration`, `msdyn_parameterconfigurationpendingpublish`, `msdyn_servicecopilotpluginactionId`, `msdyn_servicecopilotpluginid`, `msdyn_status`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_servicecopilotpluginaction_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_servicecopilotpluginaction_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_servicecopilotpluginaction_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_servicecopilotpluginaction_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_aipluginoperation_msdyn_servicecopilotpluginaction_aipluginoperationid` | [aipluginoperation](aipluginoperation.md) | `msdyn_aipluginoperationid` | `msdyn_aipluginoperationid` |
| `msdyn_botcomponent_msdyn_servicecopilotpluginaction_botcomponentid` | [botcomponent](botcomponent.md) | `msdyn_botcomponentid` | `msdyn_botcomponentid` |
| `msdyn_msdyn_servicecopilotplugin_msdyn_servicecopilotpluginaction_servicecopilotpluginid` | [msdyn_servicecopilotplugin](msdyn_servicecopilotplugin.md) | `msdyn_servicecopilotpluginid` | `msdyn_servicecopilotpluginid` |
| `organization_msdyn_servicecopilotpluginaction` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_servicecopilotpluginaction_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_servicecopilotpluginaction_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_servicecopilotpluginaction_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_servicecopilotpluginaction_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_servicecopilotpluginaction_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_servicecopilotpluginaction_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_servicecopilotpluginaction_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_servicecopilotpluginaction_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_servicecopilotpluginaction.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_servicecopilotpluginaction.md) on 2026-05-06.