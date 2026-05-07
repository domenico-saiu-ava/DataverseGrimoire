---
logical: "msdyn_casetopic"
display: "Argomento del caso"
entitySetName: "msdyn_casetopics"
primaryId: "msdyn_casetopicid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Argomento del caso

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_casetopic` |
| Display name | Argomento del caso |
| Display (plural) | Argomenti di casi |
| Schema name | `msdyn_casetopic` |
| Entity set (Web API) | `msdyn_casetopics` |
| Primary id attribute | `msdyn_casetopicid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_casetopics?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_casetopics(<guid>)
POST /api/data/v9.2/msdyn_casetopics
PATCH /api/data/v9.2/msdyn_casetopics(<guid>)
DELETE /api/data/v9.2/msdyn_casetopics(<guid>)
```

## Attributes

Writable: **12** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_casetopicid`, `msdyn_name`, `msdyn_similarityscore`, `msdyn_topiccounts`, `msdyn_topicdate`, `msdyn_topicpercentage`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_casetopic_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_casetopic_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_casetopic_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_casetopic_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_casetopic` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_casetopic_SyncErrors` | [msdyn_casetopic](msdyn_casetopic.md) | `regardingobjectid` | `regardingobjectid_msdyn_casetopic` |
| `msdyn_casetopic_AsyncOperations` | [msdyn_casetopic](msdyn_casetopic.md) | `regardingobjectid` | `regardingobjectid_msdyn_casetopic` |
| `msdyn_casetopic_MailboxTrackingFolders` | [msdyn_casetopic](msdyn_casetopic.md) | `regardingobjectid` | `regardingobjectid_msdyn_casetopic` |
| `msdyn_casetopic_UserEntityInstanceDatas` | [msdyn_casetopic](msdyn_casetopic.md) | `objectid` | `objectid_msdyn_casetopic` |
| `msdyn_casetopic_ProcessSession` | [msdyn_casetopic](msdyn_casetopic.md) | `regardingobjectid` | `regardingobjectid_msdyn_casetopic` |
| `msdyn_casetopic_BulkDeleteFailures` | [msdyn_casetopic](msdyn_casetopic.md) | `regardingobjectid` | `regardingobjectid_msdyn_casetopic` |
| `msdyn_casetopic_PrincipalObjectAttributeAccesses` | [msdyn_casetopic](msdyn_casetopic.md) | `objectid` | `objectid_msdyn_casetopic` |
| `msdyn_msdyn_casetopic_msdyn_casetopic_incident_casetopicid` | [msdyn_casetopic](msdyn_casetopic.md) | `msdyn_casetopicid` | `msdyn_casetopicid` |


## Source

Generated from [msdyn_casetopic (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_casetopic')) on 2026-05-07.