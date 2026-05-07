---
logical: "msdyn_callablecontext"
display: "Contesto richiamabile playbook"
entitySetName: "msdyn_callablecontexts"
primaryId: "msdyn_callablecontextid"
primaryName: "msdyn_EntityLogicalName"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Contesto richiamabile playbook

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_callablecontext` |
| Display name | Contesto richiamabile playbook |
| Display (plural) | Contesti richiamabili playbook |
| Schema name | `msdyn_callablecontext` |
| Entity set (Web API) | `msdyn_callablecontexts` |
| Primary id attribute | `msdyn_callablecontextid` |
| Primary name attribute | `msdyn_EntityLogicalName` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_callablecontexts?$select=msdyn_EntityLogicalName&$top=10
GET /api/data/v9.2/msdyn_callablecontexts(<guid>)
POST /api/data/v9.2/msdyn_callablecontexts
PATCH /api/data/v9.2/msdyn_callablecontexts(<guid>)
DELETE /api/data/v9.2/msdyn_callablecontexts(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_EntityLogicalName`, `msdyn_EntityOTC`, `msdyn_callablecontextid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_callablecontext_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_callablecontext_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_callablecontext_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_callablecontext_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_callablecontext` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_callablecontext` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_callablecontext` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_callablecontext` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_callablecontext_SyncErrors` | [msdyn_callablecontext](msdyn_callablecontext.md) | `regardingobjectid` | `regardingobjectid_msdyn_callablecontext` |
| `msdyn_callablecontext_DuplicateMatchingRecord` | [msdyn_callablecontext](msdyn_callablecontext.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_callablecontext` |
| `msdyn_callablecontext_DuplicateBaseRecord` | [msdyn_callablecontext](msdyn_callablecontext.md) | `baserecordid` | `baserecordid_msdyn_callablecontext` |
| `msdyn_callablecontext_AsyncOperations` | [msdyn_callablecontext](msdyn_callablecontext.md) | `regardingobjectid` | `regardingobjectid_msdyn_callablecontext` |
| `msdyn_callablecontext_MailboxTrackingFolders` | [msdyn_callablecontext](msdyn_callablecontext.md) | `regardingobjectid` | `regardingobjectid_msdyn_callablecontext` |
| `msdyn_callablecontext_UserEntityInstanceDatas` | [msdyn_callablecontext](msdyn_callablecontext.md) | `objectid` | `objectid_msdyn_callablecontext` |
| `msdyn_callablecontext_ProcessSession` | [msdyn_callablecontext](msdyn_callablecontext.md) | `regardingobjectid` | `regardingobjectid_msdyn_callablecontext` |
| `msdyn_callablecontext_BulkDeleteFailures` | [msdyn_callablecontext](msdyn_callablecontext.md) | `regardingobjectid` | `regardingobjectid_msdyn_callablecontext` |
| `msdyn_callablecontext_PrincipalObjectAttributeAccesses` | [msdyn_callablecontext](msdyn_callablecontext.md) | `objectid` | `objectid_msdyn_callablecontext` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_callablecontext_msdyn_playbooktemplate` | [msdyn_playbooktemplate](msdyn_playbooktemplate.md) | _n/a_ | `msdyn_callablecontext_msdyn_playbooktemplate` |

## Source

Generated from [msdyn_callablecontext (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_callablecontext')) on 2026-05-07.