---
logical: "msdyn_cannedmessage"
display: "Risposta rapida"
entitySetName: "msdyn_cannedmessages"
primaryId: "msdyn_cannedmessageid"
primaryName: "msdyn_title"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Risposta rapida

Archivia le risposte rapide che gli agenti possono utilizzare nel controllo della conversazione durante l'interazione con i clienti

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_cannedmessage` |
| Display name | Risposta rapida |
| Display (plural) | Risposte rapide |
| Schema name | `msdyn_cannedmessage` |
| Entity set (Web API) | `msdyn_cannedmessages` |
| Primary id attribute | `msdyn_cannedmessageid` |
| Primary name attribute | `msdyn_title` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_cannedmessages?$select=msdyn_title&$top=10
GET /api/data/v9.2/msdyn_cannedmessages(<guid>)
POST /api/data/v9.2/msdyn_cannedmessages
PATCH /api/data/v9.2/msdyn_cannedmessages(<guid>)
DELETE /api/data/v9.2/msdyn_cannedmessages(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_cannedmessageid`, `msdyn_locale_field`, `msdyn_message`, `msdyn_tagscontrolfield`, `msdyn_title`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_cannedmessage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_cannedmessage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_cannedmessage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_cannedmessage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_cannedmessage` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_cannedmessage_SyncErrors` | [msdyn_cannedmessage](msdyn_cannedmessage.md) | `regardingobjectid` | `regardingobjectid_msdyn_cannedmessage` |
| `msdyn_cannedmessage_DuplicateMatchingRecord` | [msdyn_cannedmessage](msdyn_cannedmessage.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_cannedmessage` |
| `msdyn_cannedmessage_DuplicateBaseRecord` | [msdyn_cannedmessage](msdyn_cannedmessage.md) | `baserecordid` | `baserecordid_msdyn_cannedmessage` |
| `msdyn_cannedmessage_AsyncOperations` | [msdyn_cannedmessage](msdyn_cannedmessage.md) | `regardingobjectid` | `regardingobjectid_msdyn_cannedmessage` |
| `msdyn_cannedmessage_MailboxTrackingFolders` | [msdyn_cannedmessage](msdyn_cannedmessage.md) | `regardingobjectid` | `regardingobjectid_msdyn_cannedmessage` |
| `msdyn_cannedmessage_UserEntityInstanceDatas` | [msdyn_cannedmessage](msdyn_cannedmessage.md) | `objectid` | `objectid_msdyn_cannedmessage` |
| `msdyn_cannedmessage_ProcessSession` | [msdyn_cannedmessage](msdyn_cannedmessage.md) | `regardingobjectid` | `regardingobjectid_msdyn_cannedmessage` |
| `msdyn_cannedmessage_BulkDeleteFailures` | [msdyn_cannedmessage](msdyn_cannedmessage.md) | `regardingobjectid` | `regardingobjectid_msdyn_cannedmessage` |
| `msdyn_cannedmessage_PrincipalObjectAttributeAccesses` | [msdyn_cannedmessage](msdyn_cannedmessage.md) | `objectid` | `objectid_msdyn_cannedmessage` |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_cannedmessage_liveworkstream` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | _n/a_ | `msdyn_msdyn_cannedmessage_liveworkstream` |
| `msdyn_msdyn_cannedmessage_msdyn_octag` | [msdyn_octag](msdyn_octag.md) | _n/a_ | `msdyn_msdyn_cannedmessage_msdyn_octag` |

## Source

Generated from [msdyn_cannedmessage (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_cannedmessage')) on 2026-05-07.