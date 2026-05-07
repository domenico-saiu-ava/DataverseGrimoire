---
logical: "msdyn_servicecopilotpluginaction"
display: "Azione di plug-in Service Copilot"
entitySetName: "msdyn_servicecopilotpluginactions"
primaryId: "msdyn_servicecopilotpluginactionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Azione di plug-in Service Copilot

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_servicecopilotpluginaction` |
| Display name | Azione di plug-in Service Copilot |
| Display (plural) | Azioni di plug-in Service Copilot |
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

`importsequencenumber`, `msdyn_actionuniquename`, `msdyn_aipluginoperationid`, `msdyn_botcomponentid`, `msdyn_connectorname`, `msdyn_lastactionsynctime`, `msdyn_name`, `msdyn_parameterconfiguration`, `msdyn_parameterconfigurationpendingpublish`, `msdyn_servicecopilotpluginactionid`, `msdyn_servicecopilotpluginid`, `msdyn_status`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_servicecopilotpluginaction_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_servicecopilotpluginaction_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_servicecopilotpluginaction_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_servicecopilotpluginaction_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_servicecopilotpluginaction` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_aipluginoperation_msdyn_servicecopilotpluginaction_aipluginoperationid` | [aipluginoperation](aipluginoperation.md) | `msdyn_aipluginoperationid` | `msdyn_aipluginoperationid` |
| `msdyn_botcomponent_msdyn_servicecopilotpluginaction_botcomponentid` | [botcomponent](botcomponent.md) | `msdyn_botcomponentid` | `msdyn_botcomponentid` |
| `msdyn_msdyn_servicecopilotplugin_msdyn_servicecopilotpluginaction_servicecopilotpluginid` | [msdyn_servicecopilotplugin](msdyn_servicecopilotplugin.md) | `msdyn_servicecopilotpluginid` | `msdyn_servicecopilotpluginid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_servicecopilotpluginaction_SyncErrors` | [msdyn_servicecopilotpluginaction](msdyn_servicecopilotpluginaction.md) | `regardingobjectid` | `regardingobjectid_msdyn_servicecopilotpluginaction` |
| `msdyn_servicecopilotpluginaction_DuplicateMatchingRecord` | [msdyn_servicecopilotpluginaction](msdyn_servicecopilotpluginaction.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_servicecopilotpluginaction` |
| `msdyn_servicecopilotpluginaction_DuplicateBaseRecord` | [msdyn_servicecopilotpluginaction](msdyn_servicecopilotpluginaction.md) | `baserecordid` | `baserecordid_msdyn_servicecopilotpluginaction` |
| `msdyn_servicecopilotpluginaction_AsyncOperations` | [msdyn_servicecopilotpluginaction](msdyn_servicecopilotpluginaction.md) | `regardingobjectid` | `regardingobjectid_msdyn_servicecopilotpluginaction` |
| `msdyn_servicecopilotpluginaction_MailboxTrackingFolders` | [msdyn_servicecopilotpluginaction](msdyn_servicecopilotpluginaction.md) | `regardingobjectid` | `regardingobjectid_msdyn_servicecopilotpluginaction` |
| `msdyn_servicecopilotpluginaction_UserEntityInstanceDatas` | [msdyn_servicecopilotpluginaction](msdyn_servicecopilotpluginaction.md) | `objectid` | `objectid_msdyn_servicecopilotpluginaction` |
| `msdyn_servicecopilotpluginaction_ProcessSession` | [msdyn_servicecopilotpluginaction](msdyn_servicecopilotpluginaction.md) | `regardingobjectid` | `regardingobjectid_msdyn_servicecopilotpluginaction` |
| `msdyn_servicecopilotpluginaction_BulkDeleteFailures` | [msdyn_servicecopilotpluginaction](msdyn_servicecopilotpluginaction.md) | `regardingobjectid` | `regardingobjectid_msdyn_servicecopilotpluginaction` |
| `msdyn_servicecopilotpluginaction_PrincipalObjectAttributeAccesses` | [msdyn_servicecopilotpluginaction](msdyn_servicecopilotpluginaction.md) | `objectid` | `objectid_msdyn_servicecopilotpluginaction` |


## Source

Generated from [msdyn_servicecopilotpluginaction (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_servicecopilotpluginaction')) on 2026-05-07.