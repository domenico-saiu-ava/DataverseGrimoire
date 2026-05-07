---
logical: "msdyn_servicecopilotplugin"
display: "Plug-in Service Copilot"
entitySetName: "msdyn_servicecopilotplugins"
primaryId: "msdyn_servicecopilotpluginid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Plug-in Service Copilot

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_servicecopilotplugin` |
| Display name | Plug-in Service Copilot |
| Display (plural) | Plug-in Service Copilot |
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

`importsequencenumber`, `msdyn_aipluginid`, `msdyn_analyticsenabled`, `msdyn_authmode`, `msdyn_botcomponentid`, `msdyn_connectionidpendingpublish`, `msdyn_customconnectorcontext`, `msdyn_ispublishpending`, `msdyn_lastbappluginsynctime`, `msdyn_lastpublishsuccesson`, `msdyn_name`, `msdyn_needsrolecheck`, `msdyn_parameterconfiguration`, `msdyn_plugindescription`, `msdyn_pluginname`, `msdyn_plugintype`, `msdyn_pluginuniquename`, `msdyn_publishinitiatedon`, `msdyn_servicecopilotpluginid`, `msdyn_skipgptresponse`, `msdyn_status`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_servicecopilotplugin_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_servicecopilotplugin_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_servicecopilotplugin_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_servicecopilotplugin_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_servicecopilotplugin` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_aiplugin_msdyn_servicecopilotplugin_aipluginid` | [aiplugin](aiplugin.md) | `msdyn_aipluginid` | `msdyn_aipluginid` |
| `msdyn_botcomponent_msdyn_servicecopilotplugin_botcomponentid` | [botcomponent](botcomponent.md) | `msdyn_botcomponentid` | `msdyn_botcomponentid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_servicecopilotplugin_SyncErrors` | [msdyn_servicecopilotplugin](msdyn_servicecopilotplugin.md) | `regardingobjectid` | `regardingobjectid_msdyn_servicecopilotplugin` |
| `msdyn_servicecopilotplugin_DuplicateMatchingRecord` | [msdyn_servicecopilotplugin](msdyn_servicecopilotplugin.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_servicecopilotplugin` |
| `msdyn_servicecopilotplugin_DuplicateBaseRecord` | [msdyn_servicecopilotplugin](msdyn_servicecopilotplugin.md) | `baserecordid` | `baserecordid_msdyn_servicecopilotplugin` |
| `msdyn_servicecopilotplugin_AsyncOperations` | [msdyn_servicecopilotplugin](msdyn_servicecopilotplugin.md) | `regardingobjectid` | `regardingobjectid_msdyn_servicecopilotplugin` |
| `msdyn_servicecopilotplugin_MailboxTrackingFolders` | [msdyn_servicecopilotplugin](msdyn_servicecopilotplugin.md) | `regardingobjectid` | `regardingobjectid_msdyn_servicecopilotplugin` |
| `msdyn_servicecopilotplugin_UserEntityInstanceDatas` | [msdyn_servicecopilotplugin](msdyn_servicecopilotplugin.md) | `objectid` | `objectid_msdyn_servicecopilotplugin` |
| `msdyn_servicecopilotplugin_ProcessSession` | [msdyn_servicecopilotplugin](msdyn_servicecopilotplugin.md) | `regardingobjectid` | `regardingobjectid_msdyn_servicecopilotplugin` |
| `msdyn_servicecopilotplugin_BulkDeleteFailures` | [msdyn_servicecopilotplugin](msdyn_servicecopilotplugin.md) | `regardingobjectid` | `regardingobjectid_msdyn_servicecopilotplugin` |
| `msdyn_servicecopilotplugin_PrincipalObjectAttributeAccesses` | [msdyn_servicecopilotplugin](msdyn_servicecopilotplugin.md) | `objectid` | `objectid_msdyn_servicecopilotplugin` |
| `msdyn_msdyn_servicecopilotplugin_msdyn_servicecopilotpluginrole_servicecopilotpluginId` | [msdyn_servicecopilotplugin](msdyn_servicecopilotplugin.md) | `msdyn_servicecopilotpluginid` | `msdyn_servicecopilotpluginId` |
| `msdyn_msdyn_servicecopilotplugin_msdyn_servicecopilotpluginaction_servicecopilotpluginid` | [msdyn_servicecopilotplugin](msdyn_servicecopilotplugin.md) | `msdyn_servicecopilotpluginid` | `msdyn_servicecopilotpluginid` |


## Source

Generated from [msdyn_servicecopilotplugin (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_servicecopilotplugin')) on 2026-05-07.