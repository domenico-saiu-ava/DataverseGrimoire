---
logical: "subject"
display: "Subject"
entitySetName: "subjects"
primaryId: "subjectid"
primaryName: "title"
tableType: "Standard"
ownership: "OrganizationOwned"
synonyms_it: ["argomento", "categoria", "soggetto"]
synonyms_en: ["subject", "category", "topic"]
---

# Subject

Information regarding subjects available in the system.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `subject` |
| Display name | Subject |
| Display (plural) | Subjects |
| Schema name | `Subject` |
| Entity set (Web API) | `subjects` |
| Primary id attribute | `subjectid` |
| Primary name attribute | `title` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/subjects?$select=title&$top=10
GET /api/data/v9.2/subjects(<guid>)
POST /api/data/v9.2/subjects
PATCH /api/data/v9.2/subjects(<guid>)
DELETE /api/data/v9.2/subjects(<guid>)
```

## Attributes

Writable: **7** · Read-only: **10**

### Writable

`Description`, `FeatureMask`, `ImportSequenceNumber`, `OverriddenCreatedOn`, `ParentSubject`, `SubjectId`, `Title`

### Read-only

`CreatedBy`, `CreatedByExternalParty`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedByExternalParty`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_subject_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_subject_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_subjectbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_subjectbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_subjects` | [organization](organization.md) | `organizationid` | `organizationid` |
| `subject_parent_subject` | [subject](subject.md) | `parentsubject` | `parentsubject` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_subject_knowledgearticletemplate_subjectid` | _n/a_ | `msdyn_subjectid` | _n/a_ |
| `Subject_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Subject_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `subject_kb_articles` | _n/a_ | `subjectid` | _n/a_ |
| `subject_knowledgearticles` | _n/a_ | `subjectid` | _n/a_ |
| `subject_parent_subject` | _n/a_ | `parentsubject` | _n/a_ |
| `Subject_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Subject_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [subject.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/subject.md) on 2026-05-06.